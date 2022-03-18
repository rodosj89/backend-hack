const User = require("../models/user");

function userById(req, res) {
    const id = req.params.id;
    try {
        User.findById(id).then( user => {
            if (!user) {
                res.status(404).send({message: 'Usuario no encontrado'});
                return;
            }
            res.status(200).send(user);
        });
    } catch (error) {
        res.status(408).send({message: 'Error al peticionar a la base de datos'});
    }
}

function userGetAll(req, res) {
    try {
        User.find().then( users => {
            if (!users) {
                res.status(404).send({message: 'Usuarios no encontrado'});
                return;
            }
            res.status(200).send(users);
        });
    } catch (error) {
        res.status(408).send({message: 'Error al peticionar a la base de datos'});
    }
}

module.exports = {userById,userGetAll}
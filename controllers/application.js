const Application = require("../models/application");
const User = require("../models/user");

async function  applicationCreate(req, res) {
    const {mail, vendorId} = req.body ; 
    try {
        const user = await User.findOne({ mail: mail }).exec();
        if (!user) {
            res.status(404).send({message: 'Email invalido'});
            return;
        }

        const application = new Application({userId:user._id, vendorId});
        application.save((error,application) => {
            if (error) {
                res.status(500).send({message: 'Error critico en petición a la base de datos'});
                return;
            }
            if (!application) {
                res.status(408).send({message: 'Error de guardado'});
                return;
            }
            res.status(200).send(application);
        });
    } catch (error) {
        res.status(408).send({message: error});
    }
}



function requestList(req, res) {

}

function applicationAproved(req, res) {
///libreria loadge
}



module.exports = {applicationCreate,requestList,applicationAproved}
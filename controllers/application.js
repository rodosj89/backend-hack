const { populate } = require("../models/application");
const Application = require("../models/application");
const User = require("../models/user");
const Vendor = require("../models/vendor");

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
    const id = req.params.id;
    try {
        Application.find({isStatus: false} ).populate("userId").populate("vendorId").exec((err, application) => {
            if (err) {
                res.status(500).send({message: 'Error critico en petición a la base de datos'});
                return;
            }
            if (!application) {
                res.status(404).send({message: 'Licencias solicitadas no encontradas'});
                return;
            }
            res.status(200).send(application);
        });
        
    } catch (error) {
        res.status(408).send({message: 'Error al peticionar a la base de datos'});
    }
}

function applicationAproved(req, res) {
    try {
        Application.find({isStatus: true}).populate("userId").populate("vendorId").exec((err, application) => {
            if (err) {
                res.status(500).send({message: 'Error critico en petición a la base de datos'});
                return;
            }
            if (!application) {
                res.status(404).send({message: 'Licencias solicitadas no encontradas'});
                return;
            }
            res.status(200).send(application);
        });
    } catch (error) {
        res.status(408).send({message: 'Error al peticionar a la base de datos'});
    }

}

function applicationConfirm(req, res) {
    try {
        const id = req.params.id;
        const {confirm} = req.body;
        if (!confirm) {
            //TODO: enviar mail al usuario para informar que esta en la cola de espera
            res.status(200).send({message: 'Usuario informado y en lista de espera'})
            return;
        }
        Application.findByIdAndUpdate(id, {isStatus: true}).exec((err, application) => {
            if (err) {
                res.status(500).send({message: 'Error critico en petición a la base de datos'});
                return;
            }
            if (!application) {
                res.status(404).send({message: 'Licencias solicitadas no encontradas'});
                return;
            }
            Vendor.findByIdAndUpdate({_id: application.vendorId}, {
                $inc:{
                    stock: -1
                }
            }).exec();
            
            res.status(200).send(application);
        });
    } catch (error) {
        res.status(408).send({message: 'Error al peticionar a la base de datos'});
    }
}



module.exports = {applicationCreate,requestList,applicationAproved, applicationConfirm}
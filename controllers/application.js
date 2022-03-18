const Vendor = require("../models/application");

/*
userId: {type: Schema.ObjectId, ref:"user", require: true},
vendorId: {type: Schema.ObjectId, ref:"vendor", require: true},
create:{type: Date, default: Day.now},
days:{type: Number, dafault: 30},
used:{type: Boolean, default: false},
isStatus: {type: Boolean, default: false}
*/

function applicationCreate(req, res) {
    const {mail, vendorId} = req.body ; 
    try {

        //buscar usuario por mail findOne

        const application = new Application ({userId, vendorId});
        vendor.save((error,vendor) => {
            if (error) {
                res.status(500).send({message: 'Error critico en petición a la base de datos'});
                return;
            }
            if (!vendor) {
                res.status(408).send({message: 'Error de guardado'});
                return;
            }
            res.status(200).send(vendor);
        });
    } catch (error) {
        res.status(408).send({message: error});
    }
}



function requestList(req, res) {

}

function applicationAproved(req, res) {
libreria loadge
}



module.exports = {applicationCreate,requestList,applicationAproved}
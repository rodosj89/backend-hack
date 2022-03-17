const Vendor = require("../models/vendor");

function vendorById(req, res) {
    const id = req.params.id;
    try {
        Vendor.findById(id).then( vendor => {
            if (!vendor) {
                res.status(404).send({message: 'Proveedor no encontrado'});
                return;
            }
            res.status(200).send(vendor);
        });
    } catch (error) {
        res.status(408).send({message: 'Error al peticionar a la base de datos'});
    }
}

function vendorGetAll(req, res) {

    try {
        Vendor.find().then( vendors => {
            if (!vendors) {
                res.status(404).send({message: 'Proveedores no encontrado'});
                return;
            }
            res.status(200).send(vendors);
        });
    } catch (error) {
        res.status(408).send({message: 'Error al peticionar a la base de datos'});
    }
}

function vendorCreate(req, res) {

    const { title, category, description, stock, url, img } = req.body ; 

    try {
        const vendor = new Vendor ({title, category, description, stock, url, img});
        
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

function vendorStock(req, res) {

    const { stock } = req.body ; 

    const id = req.params.id;

    try {   
        Vendor.findByIdAndUpdate( id, {stock}).exec( (error, vendor) => {
            
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


module.exports = {vendorById, vendorGetAll, vendorCreate, vendorStock}
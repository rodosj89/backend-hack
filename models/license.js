const mongoose = require('mongoose')

const licenseCollection = 'licenses';

const licenseSchema = new mongoose.Schema({
    userId: {type: ObjectId, require: true},
    vendorId: {type: ObjectId, require: true},
    cant: {type: Number, require: true},
})

module.exports = mongoose.model(licenseCollection, licenseSchema);
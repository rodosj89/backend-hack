const mongoose = require('mongoose')

const vendorCollection = 'vendor';

const vendorSchema = new mongoose.Schema({
    title: {type: String, require: true},
    category: {type: String, require: true},
    description: {type: String, require: true},
    stock: {type: Number, require: true},
    img: {type: String, require: true},
    url: {type: String, require: true},
})

module.exports = mongoose.model(vendorCollection, vendorSchema);
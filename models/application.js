const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const applicationCollection = 'applications';

const applicationSchema = new mongoose.Schema({
    userId: {type: Schema.ObjectId, ref:"users", require: true},
    vendorId: {type: Schema.ObjectId, ref:"vendor", require: true},
    create:{type: Date, default: Date.now},
    days:{type: Number, dafault: 30},
    used:{type: Boolean, default: false},
    isStatus: {type: Boolean, default: false}
})


module.exports = mongoose.model(applicationCollection, applicationSchema);

const mongoose = require('mongoose')

const userCollection = 'users';

const userSchema = new mongoose.Schema({
    name: {type: String, require: true},
    lastname: {type: String, require: true},
    password: {type: String, require: true},
    mail: {type: String, require: true},
    priority: {type: String, require: true},
    area: {type: String, require: true},
    isAdmin: {type: Boolean, require: true},
})

module.exports = mongoose.model(userCollection, userSchema);
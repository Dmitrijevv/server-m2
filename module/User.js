const { Schema, model } = require('mongoose')

const User = new Schema({
    username: { type: 'string', required: true, unique: true },
    email: { type: 'string', required: true, unique: true },
    password: { type: 'string', required: true },
    roles: [{type: String, ref: 'Role'}]

});

module.exports = model('User', User);
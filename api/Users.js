const mongoose = require('mongoose');

const Registration = new mongoose.Schema({
    email: { type: "string", required: true, unique: true },
    password: { type: "string", required: true },
    auth: Boolean,
    timestamp: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Registration', Registration);
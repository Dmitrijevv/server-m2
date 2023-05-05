const mongoose = require('mongoose');

const LinkWeb = new mongoose.Schema({
    title: { type: "string", required: true },
    link: { type: "string", required: true }
});

module.exports = mongoose.model('LinkWeb', LinkWeb);
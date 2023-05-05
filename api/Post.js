const mongoose = require('mongoose');

const Post = new mongoose.Schema({
    author: { type: "string", required: true },
    title: { type: "string", required: true },
    content: { type: "string", required: true },
    timestamp: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Post', Post)
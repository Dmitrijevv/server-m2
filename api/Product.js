const mongoose = require('mongoose');

const Product = new mongoose.Schema({
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    price: { type: "number", required: true },
    image: { type: "string", required: true },
    category: { type: "string"},
    rate: { type: "number", required: true },

    timestamp: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Product', Product)
const mongoose = require('mongoose');

const Product = new mongoose.Schema({
    title: { type: "string", required: true },
    oldPrice: { type: "number", required: true },
    price: { type: "number", required: true },
    discription: { type: "string", required: true },
    image: { type: "string" },
    imageTwo: { type: "string" },
    imageThree: { type: "string" },
    priceOne: { type: "string" },
    priceTwo: { type: "string" },
    priceThree: { type: "string" },
    sale: { type: "boolean" },
    timestamp: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Product', Product)
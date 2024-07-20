const { urlencoded } = require('express');
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: urlencoded, required: true },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

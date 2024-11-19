const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {type: String, required: true, unique: true}, 
  description: {type: String},
  amount: {type: Number, required: true},
  price: {type: Number, required: true},
  category: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],

});

module.exports = mongoose.model('Product', ProductSchema);
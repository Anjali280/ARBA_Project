const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  image: String,
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  owner: { type: Schema.Types.ObjectId, ref: "User" },
});

const Product = model("Product", ProductSchema);

module.exports = Product;

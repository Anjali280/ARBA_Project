const { Schema, model } = require("mongoose");

const CategorySchema = new Schema({
  name: String,
  slug: String,
  image: String,
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Category = model("Category", CategorySchema);

module.exports = Category;

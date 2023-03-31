const Category = require("../models/Category");
const Product = require("../models/Product");

const addProduct = async (req, res) => {
  try {
    const user = req.user;
    const productObj = req.body;

    const categoryName = await Category.findOne({ name: productObj.category });

    const product = await Product.create({
      ...productObj,
      owner: user._id,
      category: categoryName._id,
    });

    res.status(201).send({
      type: "success",
      message: "product addition successfull",
      payload: product,
    });
  } catch (err) {
    console.error(err);

    res.status(500).send({
      error: "Something Went Wrong",
    });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .populate("category", "name")
      .populate("owner", "userName");

    res.status(200).send({
      type: "success",
      message: "all products fetch successfull",
      payload: products,
    });
  } catch (err) {
    console.error(err);

    res.status(500).send({
      error: "Something Went Wrong",
    });
  }
};

const getProducts = async (req, res) => {
  try {
    const user = req.user;
    const products = await Product.find({ owner: user._id })
      .populate("category", "name")
      .populate("owner", "userName");

    res.status(200).send({
      type: "success",
      message: "fetch products for logged in user successfull",
      payload: products,
    });
  } catch (err) {
    console.error(err);

    res.status(500).send({
      error: "Something Went Wrong",
    });
  }
};

module.exports = {
  addProduct,
  getAllProducts,
  getProducts,
};

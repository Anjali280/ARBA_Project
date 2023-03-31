const Category = require("../models/Category");

const addCategory = async (req, res) => {
  try {
    const { _id } = req.user;
    const categoryObj = req.body;

    const category = await Category.create({ ...categoryObj, owner: _id });

    res.status(200).send({
      type: "success",
      message: "category addedd successfully",
      payload: category,
    });
  } catch (err) {
    console.error(err);

    res.status(500).send({
      error: "Something went wrong",
    });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find().populate("owner", "userName");

    res.status(200).send({
      type: "success",
      message: "all categories fetched successfull",
      payload: categories,
    });
  } catch (err) {
    console.log(err);

    res.status(500).send({
      error: "Something went wrong",
    });
  }
};

module.exports = { addCategory, getAllCategories };

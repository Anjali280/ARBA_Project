const Category = require("../models/Category");

const addCategory = async (req, res) => {
  try {
    const { _id } = req.user;
    const categoryObj = req.body;

    const category = await Category.create({ ...categoryObj, owner: _id });

    res.status(201).send({
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
    const { _id } = req.user;
    const categories = await Category.find({ owner: _id }).populate(
      "owner",
      "userName fullName"
    );

    res.status(200).send({
      type: "success",
      message: "all categories fetched successfully",
      payload: categories,
    });
  } catch (err) {
    console.log(err);

    res.status(500).send({
      error: "Something went wrong",
    });
  }
};

const getCategories = async (req, res) => {
  try {
    const qname = req.query.name.toLowerCase();
    const categories = await Category.find({ name: qname }).populate(
      "owner",
      "userName"
    );

    res.status(200).send({
      type: "success",
      message: "queried categories fetch successfull",
      payload: categories,
    });
  } catch (err) {
    console.log(err);

    res.status(500).send({
      error: "Something went wrong",
    });
  }
};

const getCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const category = await Category.findById(id).populate("owner", "userName");

    res.status(200).send({
      type: "success",
      message: "the category fetched successfully",
      payload: category,
    });
  } catch (err) {
    console.log(err);

    res.status(500).send({
      error: "Something went wrong",
    });
  }
};

const editCategory = async (req, res) => {
  try {
    const editCategoryObject = req.body;
    const id = req.params.id;

    let { name, slug, image } = editCategoryObject;

    await Category.findByIdAndUpdate(id, {
      $set: {
        name,
        slug,
        image,
      },
    });

    const updatedCategory = await Category.findById(id);

    res.status(200).send({
      type: "success",
      message: "edit category successfull",
      payload: updatedCategory,
    });
  } catch (err) {
    console.error(err);

    res.status(500).send({
      error: "Something Went Wrong",
    });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const id = req.params.id;

    const deletedCategory = await Category.findByIdAndDelete(id);

    res.status(200).send({
      type: "success",
      message: "delete category successfull",
      payload: deletedCategory,
    });
  } catch (err) {
    console.error(err);

    res.status(500).send({
      error: "Something Went Wrong",
    });
  }
};

module.exports = {
  addCategory,
  getCategory,
  getCategories,
  getAllCategories,
  editCategory,
  deleteCategory,
};

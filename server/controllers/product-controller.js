// const Category = require("../models/Category");
// const Product = require("../models/Product");

// const addProduct = async (req, res) => {
//   try {
//     const user = req.user;
//     const productObj = req.body;

//     const categoryName = await Category.findOne({ name: productObj.category });

//     const product = await Product.create({
//       ...productObj,
//       owner: user._id,
//       category: categoryName._id,
//     });

//     res.status(201).send({
//       type: "success",
//       message: "product addition successfull",
//       payload: product,
//     });
//   } catch (err) {
//     console.error(err);

//     res.status(500).send({
//       error: "Something Went Wrong",
//     });
//   }
// };

// const getAllProducts = async (req, res) => {
//   try {
//     const products = await Product.find()
//       .populate("category", "name")
//       .populate("owner", "userName");

//     res.status(200).send({
//       type: "success",
//       message: "all products fetch successfull",
//       payload: products,
//     });
//   } catch (err) {
//     console.error(err);

//     res.status(500).send({
//       error: "Something Went Wrong",
//     });
//   }
// };

// const getProducts = async (req, res) => {
//   try {
//     const user = req.user;
//     const products = await Product.find({ owner: user._id })
//       .populate("category", "name")
//       .populate("owner", "userName");

//     res.status(200).send({
//       type: "success",
//       message: "fetch products for logged in user successfull",
//       payload: products,
//     });
//   } catch (err) {
//     console.error(err);

//     res.status(500).send({
//       error: "Something Went Wrong",
//     });
//   }
// };

// module.exports = {
//   addProduct,
//   getAllProducts,
//   getProducts,
// };

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
    const { _id } = req.user;
    const products = await Product.find({ owner: _id })
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

// in dev for fetch using queries
const getProducts = async (req, res) => {
  try {
    const { _id } = req.user;
    const queries = req.query;
    let filterCondition = { owner: _id };
    let sortCondition = {};

    for (let key in queries) {
      if (queries.hasOwnProperty(key)) {
        if (key === "title") {
          filterCondition.title = queries["title"];
        }
        if (key === "sort") {
          sortCondition = { price: queries["sort"] };
        }
        if (key === "filter") {
          const { _id } = await Category.findOne({ name: queries["filter"] });
          filterCondition.category = _id;
        }
      }
    }

    const products = await Product.find(filterCondition).sort(sortCondition);

    res.status(200).send({
      type: "success",
      message: "queried products for logged in user successfull",
      payload: products,
    });
  } catch (err) {
    console.error(err);

    res.status(500).send({
      error: "Something Went Wrong",
    });
  }
};

const getProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id)
      .populate("category", "name")
      .populate("owner", "userName");

    res.status(200).send({
      type: "success",
      message: "product for given id successfull",
      payload: product,
    });
  } catch (err) {
    console.error(err);

    res.status(500).send({
      error: "Something Went Wrong",
    });
  }
};

const editProduct = async (req, res) => {
  try {
    const editProductObject = req.body;
    const id = req.params.id;
    let categoryDetails;

    let { title, description, price, image, category } = editProductObject;

    if (category) {
      categoryDetails = await Category.findOne({ name: category });
      category = categoryDetails._id;
    }

    await Product.findByIdAndUpdate(id, {
      $set: {
        title,
        description,
        image,
        price,
        category,
      },
    });

    const updatedProduct = await Product.findById(id);

    res.status(200).send({
      type: "success",
      message: "edit product successfull",
      payload: updatedProduct,
    });
  } catch (err) {
    console.error(err);

    res.status(500).send({
      error: "Something Went Wrong",
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;

    const deletedProduct = await Product.findByIdAndDelete(id);

    res.status(200).send({
      type: "success",
      message: "delete product successfull",
      payload: deletedProduct,
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
  editProduct,
  deleteProduct,
  getProduct,
};

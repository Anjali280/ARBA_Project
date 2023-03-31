const express = require("express");
const productRouter = express.Router();

const {
  addProduct,
  getAllProducts,
  getProducts,
} = require("../controllers/product-controller");
const auth = require("../middlewares/auth-middleware");

productRouter.post("/", auth, addProduct);
productRouter.get("/all", getAllProducts);
productRouter.get("/", auth, getProducts);

module.exports = productRouter;

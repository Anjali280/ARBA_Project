const express = require("express");
const productRouter = express.Router();

const {
  addProduct,
  getAllProducts,
  getProducts,
  editProduct,
  deleteProduct,
  getProduct,
} = require("../controllers/product-controller");
const auth = require("../middlewares/auth-middleware");

productRouter.post("/", auth, addProduct);
productRouter.get("/all", auth, getAllProducts);
productRouter.get("/", auth, getProducts);
productRouter.get("/:id", auth, getProduct);
productRouter.patch("/:id", auth, editProduct);
productRouter.delete("/:id", auth, deleteProduct);

module.exports = productRouter;

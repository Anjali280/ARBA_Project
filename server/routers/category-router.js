const express = require("express");
const categoryRouter = express.Router();

const {
  addCategory,
  getAllCategories,
  editCategory,
  deleteCategory,
  getCategory,
  getCategories,
} = require("../controllers/category-controllers");
const auth = require("../middlewares/auth-middleware");

categoryRouter.post("/", auth, addCategory);
categoryRouter.get("/all", auth, getAllCategories);
categoryRouter.get("/:id", auth, getCategory);
categoryRouter.get("/", auth, getCategories);
categoryRouter.patch("/:id", auth, editCategory);
categoryRouter.delete("/:id", auth, deleteCategory);

module.exports = categoryRouter;

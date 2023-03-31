const express = require("express");
const categoryRouter = express.Router();

const {
  addCategory,
  getAllCategories,
} = require("../controllers/category-controllers");
const auth = require("../middlewares/auth-middleware");

categoryRouter.post("/", auth, addCategory);
categoryRouter.get("/", getAllCategories);

module.exports = categoryRouter;

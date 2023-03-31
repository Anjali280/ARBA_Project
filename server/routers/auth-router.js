const express = require("express");
const authRouter = express.Router();

const auth = require("../middlewares/auth-middleware");
const {
  registerUser,
  loginUser,
  getLoggedInUser,
} = require("../controllers/auth-controller");

authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);
authRouter.get("/loggedInUser", auth, getLoggedInUser);

module.exports = authRouter;

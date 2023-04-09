const express = require("express");
const authRouter = express.Router();

const auth = require("../middlewares/auth-middleware");
const {
  registerUser,
  loginUser,
  getLoggedInUser,
  editProfile,
  updatePassword,
} = require("../controllers/auth-controller");

authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);
authRouter.patch("/editprofile", auth, editProfile);
authRouter.get("/loggedInUser", auth, getLoggedInUser);
authRouter.patch("/changepassword", auth, updatePassword);

module.exports = authRouter;

const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");
const User = require("../models/User");

const registerUser = async (req, res) => {
  try {
    const userObj = req.body;
    const { email } = userObj;

    let user = await User.findOne({
      email,
    });

    if (user) {
      return res.status(400).send({
        type: "faliure",
        message: "User with email already exists",
      });
    }

    let originalPassword = userObj.password;
    let hashedPassword = bcrypt.hashSync(originalPassword);
    userObj.password = hashedPassword;

    user = await User.create(userObj);

    res.status(201).send({
      type: "success",
      message: "Registration successful",
      payload: user,
    });
  } catch (err) {
    console.error(err);

    res.status(500).send({
      error: "Something went wrong",
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { userName, password } = req.body;

    let user = await User.findOne({
      userName,
    });

    if (!user) {
      res.status(400).send({
        type: "faliure",
        message: `username ${userName} does not exist`,
      });
    } else if (!bcrypt.compareSync(password, user.password)) {
      res.status(400).send({
        type: "faliure",
        message: "Wrong password",
      });
    } else {
      // Create JWT token
      const token = generateToken(user);
      const { _id, userName } = user;

      res.status(200).send({
        type: "success",
        message: "Login successful",
        payload: {
          token,
          user: {
            _id,
            userName,
          },
        },
      });
    }
  } catch (err) {
    console.log(err);

    res.status(500).send({
      error: "Something went wrong",
    });
  }
};

const getLoggedInUser = async (req, res) => {
  try {
    const { _id } = req.user;
    const { userName, fullName, email, avatar } = await User.findById(_id);

    res.send({
      type: "success",
      message: "fetch logged in user info success",
      payload: { userName, fullName, email, avatar },
    });
  } catch (err) {
    res.status(500).send({
      error: "Something went wrong",
    });
  }
};

const editProfile = async (req, res) => {
  try {
    const { _id } = req.user;
    const { fullName, avatar } = req.body;

    await User.findByIdAndUpdate(_id, {
      $set: { fullName, avatar },
    });

    const updatedUser = await User.findById(_id);

    res.send({
      type: "success",
      message: "profile updated successfully",
      payload: updatedUser,
    });
  } catch (err) {
    res.status(500).send({
      error: "Something went wrong",
    });
  }
};

const updatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const { _id } = req.user;
    const user = await User.findById(_id);

    if (!bcrypt.compareSync(oldPassword, user.password)) {
      return res.status(400).send({
        type: "faliure",
        message: "wrong old password",
      });
    }

    const inputPassword = newPassword;
    const hashedPassword = bcrypt.hashSync(inputPassword);

    await User.findByIdAndUpdate(_id, { $set: { password: hashedPassword } });

    res.status(201).send({
      type: "success",
      message: "Password changed successfully",
    });
  } catch (err) {
    console.error(err);

    res.status(500).send({
      error: "Something went wrong",
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getLoggedInUser,
  editProfile,
  updatePassword,
};

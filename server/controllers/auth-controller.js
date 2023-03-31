const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");
const User = require("../models/User");

/*FOR REGISTRATION */
const registerUser = async (req, res) => {
  try {
    const userObj = req.body;
    const { email, userName } = userObj;

    let user = await User.findOne({
      email,
      userName,
    });

    if (user) {
      return res.status(400).send({
        type: "faliure",
        message: "User with email or username already exists",
      });
    }

    let originalPassword = userObj.password;
    let hashedPassword = bcrypt.hashSync(originalPassword);
    userObj.password = hashedPassword;

    user = await User.create(userObj);

    res.status(200).send({
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
    const user = req.user;
    res.send({
      type: "success",
      message: "user logged in",
      payload: user,
    });
  } catch (err) {
    res.status(500).send({
      error: "Something went wrong",
    });
  }
};

module.exports = { registerUser, loginUser, getLoggedInUser };

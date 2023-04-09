const jwt = require("jsonwebtoken");
const config = require("../configurations/config");

const generateToken = (user) => {
  const { _id, userName } = user;

  const jsonWebToken = jwt.sign({ _id, userName }, config.JWT_SECRET_KEY, {
    expiresIn: "1d",
  });

  return jsonWebToken;
};

module.exports = generateToken;

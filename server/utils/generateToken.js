const jwt = require("jsonwebtoken");
const config = require("../configurations/config");

const generateToken = (user) => {
  const { _id, name, userName } = user;

  const jsonWebToken = jwt.sign(
    { _id, name, userName },
    config.JWT_SECRET_KEY,
    { expiresIn: "1d" }
  );

  return jsonWebToken;
};

module.exports = generateToken;

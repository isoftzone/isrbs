const jwt = require("jsonwebtoken");

const maxAge = 3 * 24 * 60 * 60 * 1000; // 3 days in milliseconds
const createToken = (SCHEMANAME, USERID) => {
  return jwt.sign({ SCHEMANAME, USERID }, process.env.JWT_SECRET, {
    expiresIn: maxAge,
  });
};

module.exports = { createToken, maxAge };
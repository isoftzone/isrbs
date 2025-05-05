const jwt = require("jsonwebtoken");

const maxAge = 3 * 24 * 60 * 60 * 1000; // 3 days in milliseconds
const createToken = (SCHEMANAME,  USERID,COMPANYID) => {
  return jwt.sign({ SCHEMANAME, USERID , COMPANYID}, process.env.JWT_SECRET, {
    expiresIn: maxAge,
  });
};

module.exports = { createToken, maxAge };
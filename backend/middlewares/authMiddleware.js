const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.cookies?.jwt;

  if (!token) {
    return res.status(401).send("You are not authenticated!");
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).send("Token is not valid!");

    req.schema = decoded.SCHEMANAME;
    req.companyid = decoded.COMPANYID;
    req.userId = decoded.USERID; 
    next();
  });
};

module.exports = verifyToken;


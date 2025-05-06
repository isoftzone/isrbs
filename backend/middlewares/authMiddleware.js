const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.cookies?.jwt;

  if (!token) {
    return res.status(401).send("You are not authenticated!");
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).send("Token is not valid!");

    req.schema = decoded.SCHEMANAME;
    req.companyId = decoded.COMPANYID;
    req.userId = decoded.USERID; 
   
    // console.log("Mid companyId:", req.companyId);
    // console.log("Mid SCHEMANAME:", req.schema); 
    // console.log("Mid userId:", req.userId);
    next();
  });
};

module.exports = verifyToken;


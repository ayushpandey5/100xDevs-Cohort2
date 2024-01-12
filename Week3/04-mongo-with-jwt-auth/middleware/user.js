const jwt = require("jsonwebtoken");
const JWT_SECRET = "JsonWebTokenPassword@123";

function userMiddleware(req, res, next) {
  const token = req.headers.authorization;
  const words = token.split(" ");
  const jwtToken = words[1];

  try {
    const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
    if (decodedValue.username) {
      next();
    } else {
      req.status(403).json({ message: "You are not authenticated" });
    }
  } catch (error) {
    res.json({
      msg: "Incorrect inputs",
    });
  }
}

module.exports = userMiddleware;

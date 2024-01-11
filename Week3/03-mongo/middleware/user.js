const { User } = require("../db");

async function userMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;

  try {
    const user = await User.findOne({ username: username, password: password });
    if (user) {
      next();
    } else {
      return res.status(403).json({ error: "Invalid user credentials" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = userMiddleware;

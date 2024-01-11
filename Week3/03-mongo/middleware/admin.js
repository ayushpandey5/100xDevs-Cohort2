const { Admin } = require("../db/index");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;

  try {
    const admin = await Admin.findOne({
      username: username,
      password: password,
    });
    if (admin) {
      next();
    } else {
      return res.status(403).json({ error: "Invalid admin credentials" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = adminMiddleware;

const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const jwt = require("jsonwebtoken");
const { User } = require("../db");
const JWT_SECRET = "JsonWebTokenPassword@123";

// User Routes
router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const existingUser = await User.findOne({
      username: username,
      password: password,
    });
    if (existingUser) {
      return res.status(403).json({ error: "User already exists" });
    }
    const newUser = new User({
      username: username,
      password: password,
    });

    await newUser.save();
    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const user = await User.findOne({
      username: username,
      password: password,
    });
    if (user) {
      const token = jwt.sign(username, JWT_SECRET);
      user.token = token;
      await user.save();
      return res.status(403).json({ token: token });
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/courses", (req, res) => {
  // Implement listing all courses logic
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  // Implement course purchase logic
});

router.get("/purchasedCourses", userMiddleware, (req, res) => {
  // Implement fetching purchased courses logic
});

module.exports = router;

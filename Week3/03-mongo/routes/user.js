const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User } = require("../db");

// User Routes
router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const existinguser = await User.findOne({
      username: username,
      password: password,
    });
    if (existinguser) {
      return res.status(400).json({ error: "User already exists" });
    }
    const user = new User({
      username: username,
      password: password,
      courses: [],
    });
    await user.save();
    return res.status(201).json({ message: "User created successfully" });
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

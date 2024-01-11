const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { default: mongoose } = require("mongoose");

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

router.get("/courses", async (req, res) => {
  const courses = await Course.find({});
  res.status(200).json({ courses: courses });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const username = req.headers.username;

    const updatedUser = await User.findOneAndUpdate(
      { username: username },
      { $push: { purchesedCourses: courseId } }
    );

    if (updatedUser) {
      return res.json({
        message: "Purchase complete!",
      });
    }
    return res.status(404).json({ error: "User not found." });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  const username = req.headers.username;
  const user = await User.findOne({ username: username });
  const courses = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });
  res.status(201).json({
    courses: courses,
  });
});

module.exports = router;

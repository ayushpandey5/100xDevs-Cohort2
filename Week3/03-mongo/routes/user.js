const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

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
  res.status(201).json({ courses: courses });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  const courseId = req.params.courseId;
  const username = req.headers.username;

  const user = await User.updateOne(
    { username: username },
    { $addToSet: { purchasedCourse: courseId } }
  );

  return res.status(201).json({ message: "Course purchased successfully" });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  const user = await User.findOne({ username: username });
  const courses = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });

  if (user) {
    res.status(201).json({ purchasedCourses: user });
  }
});

module.exports = router;

const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const jwt = require("jsonwebtoken");
const { User, Course } = require("../db");
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
      const token = jwt.sign({ username }, JWT_SECRET);
      user.token = token;
      await user.save();
      return res.status(403).json({ token: token });
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/courses", async (req, res) => {
  try {
    const courses = await Course.find({});
    res.status(200).json({ courses: courses });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  const courseId = req.params.courseId;
  const username = req.username;
  console.log(courseId);
  try {
    console.log("try");
    const user = await User.findOneAndUpdate(
      { username: username },
      { $push: { purchasedCourses: courseId } },
      { new: true }
    );

    console.log(user);
    if (user) {
      return res.json({
        message: "Purchase complete!",
      });
    }

    return res.status(404).json({ error: "User not found." });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  const username = req.username;
  const user = await User.findOne({ username: username });
  const courses = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });

  console.log("Courses:", courses);
  res.status(201).json({
    courses: courses,
  });
});

module.exports = router;

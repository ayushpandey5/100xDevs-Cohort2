const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const existingadmin = await Admin.findOne({
      username: username,
      password: password,
    });
    if (existingadmin) {
      return res.status(403).json({ error: "Admins already exists" });
    }
    const admin = new Admin({
      username: username,
      password: password,
    });
    await admin.save();
    return res.status(201).json({ message: "Admin created successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  const course = req.body;
  try {
    const newCourse = await Course.create(course);

    res.status(201).json({
      message: "Course created successfully",
      courseId: newCourse._id,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  const courses = Course.find({});
  res.status(200).json({ courses: courses });
});

module.exports = router;

const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db/index");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "JsonWebTokenPassword@123";

// Admin Routes
router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const existingAdmin = await Admin.findOne({
    username: username,
    password: password,
  });
  if (existingAdmin) {
    return res.status(402).json({ message: "Admin already exists" });
  }

  const newAdmin = new Admin({
    username: username,
    password: password,
  });

  await newAdmin.save();
  return res.status(201).json({ message: "Admin created successfully" });
});

router.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const admin = await Admin.findOne({
      username: username,
      password: password,
    });
    if (admin) {
      const token = jwt.sign({ username }, JWT_SECRET);
      admin.token = token;
      await admin.save();
      return res.status(201).json({ token: token });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const imageLink = req.body.imageLink;
  const price = req.body.price;

  const newCourse = await Course.create({
    title,
    description,
    imageLink,
    price,
  });
  res.json({
    message: "Course created successfully",
    courseId: newCourse._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  try {
    const courses = await Course.find({});
    res.status(200).json({ courses: courses });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;

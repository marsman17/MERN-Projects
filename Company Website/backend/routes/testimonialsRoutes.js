const express = require("express");
const Testimonial = require("../models/Testimonial");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", authMiddleware, async (req, res) => {
  const testimonial = new Testimonial(req.body);
  try {
    await testimonial.save();
    res.status(201).json(testimonial);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;

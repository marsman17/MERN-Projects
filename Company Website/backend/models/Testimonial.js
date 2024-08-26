const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema({
  name: String,
  feedback: String,
  company: String,
});

module.exports = mongoose.model("Testimonial", testimonialSchema);

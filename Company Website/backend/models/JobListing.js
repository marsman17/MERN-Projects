const mongoose = require("mongoose");

const jobListingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  requirements: { type: String, required: true },
  applyLink: { type: String, required: true },
});

module.exports = mongoose.model("JobListing", jobListingSchema);

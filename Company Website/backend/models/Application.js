const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "JobListing",
    required: true,
  },
  applicantName: { type: String, required: true },
  applicantEmail: { type: String, required: true },
  resumeLink: { type: String, required: true },
  coverLetter: { type: String },
  appliedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Application", applicationSchema);

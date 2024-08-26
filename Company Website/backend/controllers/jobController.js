const JobListing = require("../models/JobListing");
const Application = require("../models/Application");
exports.getJobListings = async (req, res) => {
  try {
    const jobs = await JobListing.find();
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.getJobDetails = async (req, res) => {
  try {
    const job = await JobListing.findById(req.params.id);
    if (!job) return res.status(404).json({ message: "Job not found" });
    res.status(200).json(job);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.applyForJob = async (req, res) => {
  const { jobId, applicantName, applicantEmail, resumeLink, coverLetter } =
    req.body;
  try {
    const application = new Application({
      jobId,
      applicantName,
      applicantEmail,
      resumeLink,
      coverLetter,
    });
    const savedApplication = await application.save();
    res.status(201).json(savedApplication);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

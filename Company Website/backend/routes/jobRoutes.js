const express = require("express");
const {
  getJobListings,
  getJobDetails,
  applyForJob,
} = require("../controllers/jobController");
const router = express.Router();
router.get("/listings", getJobListings);
router.get("/listings/:id", getJobDetails);
router.post("/apply", applyForJob);

module.exports = router;

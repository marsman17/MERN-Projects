const express = require("express");
const {
  getStrengths,
  getDifferentiators,
  getSuccessStories,
} = require("../controllers/whyUsController");
const router = express.Router();
router.get("/strengths", getStrengths);
router.get("/differentiators", getDifferentiators);
router.get("/success-stories", getSuccessStories);
module.exports = router;

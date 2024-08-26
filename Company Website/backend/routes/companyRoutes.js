const express = require("express");
const Company = require("../models/Company");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const company = await Company.find();
    res.json(company);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", authMiddleware, async (req, res) => {
  const company = new Company(req.body);
  try {
    await company.save();
    res.status(201).json(company);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;

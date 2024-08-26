const express = require("express");
const Service = require("../models/Service");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", authMiddleware, async (req, res) => {
  const service = new Service(req.body);
  try {
    await service.save();
    res.status(201).json(service);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;

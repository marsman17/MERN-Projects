const express = require("express");
const router = express.Router();
const { authMiddleware, roleMiddleware } = require("../middleware/auth");
const {
  getUserProfile,
  updateUserProfile,
  submitProject,
  getNotifications,
} = require("../controllers/profileController");
router.get("/profile", authMiddleware, getUserProfile);
router.put("/profile", authMiddleware, updateUserProfile);
router.post("/projects", authMiddleware, submitProject);
router.get("/notifications", authMiddleware, getNotifications);

module.exports = router;

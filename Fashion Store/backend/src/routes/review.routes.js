const express = require("express");
const router = express.Router();
const reviewController = require("../controller/review.controller.js");
const authenticate = require("../middleware/authenticate.js");
router.post("/create", authenticate, reviewController.createreview);
router.get("/product/:productId", authenticate, reviewController.getAllreview);
module.exports = router;

const reviewService = require("../services/review.service.js");
const createreview = async (res, req) => {
  const user = req.user;
  try {
    const review = await reviewService.createreview(req.body, user);
    return res.status(201).send(review);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};
const getAllreview = async (res, req) => {
  const productId = req.params.productId;
  const user = req.user;
  try {
    const reviews = await reviewService.getAllreview(productId);
    return res.status(201).send(reviews);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};
module.exports = {
  createreview,
  getAllreview,
};

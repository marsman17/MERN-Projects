const Rating = require("../models/rating.model.js");
const productService = require("../services/product.service.js");

async function createRating(reqData, user) {
  const product = await productService.findProductById(reqData.productId);

  const rating = new rating({
    user: user._id,
    product: product._id,
    rating: reqData.rating,
    createdAt: new Date(),
  });
  await product.save();
  return await rating.save();
}
async function getAllRating(productId) {
  const product = await productService.findProductById(reqData.productId);
  return await rating.find({ product: productId }).populate("user");
}
module.exports = {
  createRating,
  getAllRating,
};

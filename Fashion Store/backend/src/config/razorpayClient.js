const Razorpay = require("razorpay");

const instance = new Razorpay({
  key_id: "key",
  key_secret: "secret",
});

module.exports = razorpay;

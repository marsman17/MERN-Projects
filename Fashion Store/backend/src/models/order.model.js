const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
    orderItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "orderItems",
    }],
    orderDate: {
        type: Date,
        required: true,
    },
    deliveryDate: {
        type: Date,
    },
    shippingAddress: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "addresses",
    },
    paymentdetails: {
      paymentMethod: {
        type:String,
      },
      transactionId: {
        type:String,
      },
      paymentId: {
        type:String,
      },
      paymentStatus: {
        type:String,
        default: "PENDING"
      },   
    },
    totalPrice: {
        type: Number,
        requred: true,
    },
    totalDiscountedPrice: {
        type: Number,
        requred: true,
    },
    discount: {
        type: Number,
        requred: true,
    },
    orderStatus: {
        type: String,
        requred: true,
        default: "PENDING"
    },
    totalItem: {
        type: Number,
        requred: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
const Order = mongoose.model('orders', orderSchema);
module.exports = Order;
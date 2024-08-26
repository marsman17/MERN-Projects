import React from "react";
import OrderSummaryCard from "./OrderSummaryCard";
import { Button } from "@mui/material";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
const OrderSummary = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { order } = useSelector((store) => store);
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");
  return (
    <div>
      <div className="p-5 shadow-md text-left rounded-md border">
        <div className="text-3xl pt-2 text-gray-800 font-normal">
          Order Summary
        </div>
        <OrderSummaryCard />
      </div>
      <div>
        <h1 className="text-gray-800 text-4xl pt-12 text-left pl-20"> Cart</h1>
        <div className="lg:grid grid-cols-3 lg:px-16 pt-10 relative">
          <div className="col-span-2 space-y-2">
            {order.order?.orderItems.map((item) => (
              <CartItem item={item} />
            ))}
          </div>
          <div className="px-5 sticky top-0 h-[100vh] mt-5 mx-5 lg:mt-0">
            <div className="border-2 rounded-md pb-1 border-indigo-600">
              <p className="text-gray-800 py-2"> Price Details</p>
              <hr className="border-indigo-600 border" />
              <div className="space-y-2 font-normal mb-1">
                <div className="flex justify-between px-2 pt-3 text-gray-600">
                  <span>Price</span>
                  <span className="text-gray-600">
                    PKR {order.order?.totalPrice}
                  </span>
                </div>
                <div className="flex justify-between pt-3 px-2 text-gray-600">
                  <span>Discount</span>
                  <span className="text-yellow-400">
                    - PKR {order.order?.totalDiscountedPrice}
                  </span>
                </div>
                <div className="flex justify-between px-2 pt-3">
                  <span className=" text-gray-600">Delivery Charges</span>
                  <span className="text-green-600">FREE</span>
                </div>
                <div className="flex justify-between pt-3 px-2 text-gray-900">
                  <span>Total Amount</span>
                  <span className=" text-indigo-600 text-md">PKR 2800</span>
                </div>
                <hr className="border-indigo-600 border" />
                <Button
                  variant="contained"
                  sx={{
                    px: ".7rem",
                    py: ".3rem",
                    bgcolor: "#4F46E5",
                    "&:hover": {
                      bgcolor: "#6F46E5",
                    },
                  }}
                >
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default OrderSummary;

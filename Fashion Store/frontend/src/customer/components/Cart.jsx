import React from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate("/checkout?step=2");
  };
  return (
    <div>
      <h1 className="text-gray-800 text-4xl pt-10 text-left pl-20"> Cart</h1>
      <div className="lg:grid grid-cols-3 lg:px-16 pt-10 relative">
        <div className="col-span-2 space-y-2">
          {[1, 1, 1, 1].map((item) => (
            <CartItem />
          ))}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 mx-5 lg:mt-0">
          <div className="border-2 rounded-md pb-1 border-indigo-600">
            <p className="text-gray-800 py-2"> Price Details</p>
            <hr className="border-indigo-600 border" />
            <div className="space-y-2 font-normal mb-1">
              <div className="flex justify-between px-2 pt-3 text-gray-600">
                <span>Price</span>
                <span className="text-gray-600">PKR 4000</span>
              </div>
              <div className="flex justify-between pt-3 px-2 text-gray-600">
                <span>Discount</span>
                <span className="text-yellow-400">- PKR 1200</span>
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
                onClick={handleCheckout}
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
  );
};

export default Cart;

import React from "react";
import { Grid } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/account/order/${5}")}>
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="relative w-[5rem] lg:w-[9rem] lg:h-[9rem] rounded-sm shadow- border-gray-300 border overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-sm transition-transform duration-300 transform hover:scale-105"
              src="https://outfitters.com.pk/cdn/shop/files/F0526206634.jpg?v=1716963336"
              alt=""
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-center text-white bg-black bg-opacity-10 opacity-0 transition-opacity duration-300 hover:opacity-100">
              <div className="text-left space-y-1 px-2 mt-10 flex flex-col justify-between h-full">
                <div>
                  <p className="font-normal text-md">Pink Crop-Top</p>
                  <p className="opacity-90 text-pink-500 text-sm tracking-tight">
                    Pink
                  </p>
                  <div className="flex space-x-3 items-center text-sm lg:text-sm text-gray-900">
                    <p className="text-gray-900 opacity-90 line-through">
                      PKR 1999
                    </p>
                    <span className="text-gray-800 px-1 rounded-sm bg-yellow-300 relative">
                      1200
                      <span className="text-xs -ml-5 text-black">
                        &emsp;&emsp;-40%
                      </span>
                    </span>
                  </div>
                </div>
                <div className="pb-20">
                  {true && (
                    <span className="text-left mt-7 flex bg-green-500 pl-1 -mx-1 rounded-sm items-center">
                      <span className="text-xs text-gray-800">
                        <AdjustIcon
                          sx={{ width: "12px", height: "12px" }}
                          className="text-gray-800 mr-1"
                        />
                        Delivered on July 16th
                      </span>
                    </span>
                  )}
                  {false && (
                    <span className="flex items-center">
                      <AdjustIcon />
                      <span>Expected Delivered on July 16th</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;

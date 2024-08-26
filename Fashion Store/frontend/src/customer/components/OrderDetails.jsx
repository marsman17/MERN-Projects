import React from "react";
import OrderCard from "./OrderCard";
import AddressCard from "./AddressCard";
import Order from "./Order";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { indigo } from "@mui/material/colors";
import { StarRateRounded } from "@mui/icons-material";
const OrderDetails = () => {
  return (
    <div className="px:5 lg:px-20">
      <div className="text-left">
        <h1 className="text-3xl text-gray-800 pt-10 py-2"> Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="pb-2">
        <OrderTracker activeStep={3} />
      </div>
      <Grid className="space-y-4" container>
        {[1, 1, 1, 1, 1].map((item) => (
          <Grid
            item
            container
            className="shadow-md rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex flex-row">
                <img
                  className="w-[6rem] h-[6rem]  border border-gray-300 rounded-sm shadow-sm object-cover object-top"
                  src="https://outfitters.com.pk/cdn/shop/files/F0526206634.jpg?v=1716963336"
                  alt=""
                />
                <div className="text-left ml-5">
                  <p className="font-normal text-gray-700 text-md">
                    Pink Crop-Top
                  </p>
                  <p className="opacity-90 text-pink-500 text-sm tracking-tight">
                    Pink
                  </p>
                  <p className="space-x-5 text-gray-600 text-sm tracking-tight">
                    Medium
                  </p>
                  <p className="space-x-5 text-gray-600 text-xs">
                    Hand-crafted, 100% Cotton Fabric.
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
              </div>
            </Grid>
            <Grid item>
              <Box sx={{ color: indigo[500] }}>
                <StarRateRounded sx={{ fontSize: "2rem" }} className="px-2" />
                <span>Rate & Review the Product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default OrderDetails;

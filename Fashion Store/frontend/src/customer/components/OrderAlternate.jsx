import React from "react";
import { Grid } from "@mui/material";
import OrderCard from "./OrderCard";
const OrderStatus = [
  { label: "Enroute", value: "enroute" },
  { label: "Delivered", value: "delivered" },
  { label: "Cancelled", value: "cancelled" },
  { label: "Returned", value: "returned" },
];
const Order = () => {
  return (
    <div>
      <br />
      <br />
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={2.5}>
          <div className="h-auto rounded-sm shadow-md text-left border ml-5 bg-white p-5 sticky top-5">
            <h1 className="text-xl pb-3">Filter</h1>
            <hr />
            <div className="space-y-4 mt-2">
              <h1 className="font-normal mt-3 -mb-1">Order Status</h1>
              {OrderStatus.map((option) => (
                <div className="flex items-center">
                  <input
                    defaultValue={option.value}
                    type="checkbox"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-800"
                  />
                  <label
                    className="ml-3 text-sm text-gray-700"
                    htmlFor={option.value}
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Grid>

        <Grid item xs={9} className="flex flex-row space-x-4">
          {[1, 1, 1, 1, 1, 1].map((item) => (
            <OrderCard />
          ))}
        </Grid>
      </Grid>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Order;

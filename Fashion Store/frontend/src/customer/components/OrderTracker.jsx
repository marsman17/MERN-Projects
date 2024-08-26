import { Stepper, Step, StepLabel } from "@mui/material";
import React from "react";

const steps = ["Placed", "Order Confirmed", "Shipped", "Enroute", "Delivered"];
const OrderTracker = ({ activeStep }) => {
  return (
    <div className="w-full -mt-10">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step>
            <StepLabel sx={{ color: "#4F46E5", fontSize: "44px" }}>
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default OrderTracker;

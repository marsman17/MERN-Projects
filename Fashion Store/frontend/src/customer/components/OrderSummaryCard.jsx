import React from "react";

const OrderSummaryCard = () => {
  return (
    <div>
      <br />
      <hr />
      <div className="space-y-4 text-gray-800 font-normal">
        <p className="text-xl pt-6">Muhammad Ahmad Naveed</p>
        <p>Model Town, Lahore, Punjab, 57400</p>
        <div className="space-y-1">03454114424</div>
        <br />
      </div>
      <div className="space-y-2 text-gray-800 font-normal"></div>
      <p className="text-gray-800">
        Number of Items:&emsp;<span className="text-gray-700">4</span>
      </p>
      <p>
        Item List:{" "}
        <span className="text-gray-700">
          &emsp;&emsp;&emsp;&ensp;&nbsp;Pink Crop-Top,
        </span>
      </p>
      <p className="text-gray-700">
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&ensp;Pink Crop-Top,
      </p>
      <p className="text-gray-700">
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&ensp;Pink Crop-Top,
      </p>
      <p className="text-gray-700">
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&ensp;Pink Crop-Top,
      </p>
      <br />
    </div>
  );
};

export default OrderSummaryCard;

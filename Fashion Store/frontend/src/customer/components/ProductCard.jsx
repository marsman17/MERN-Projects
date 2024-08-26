import React from "react";
import Circle from "./Circle";
import { useNavigate } from "react-router-dom";

const ProductCard = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/product/${5}")}
      className="w-[15rem] flex-col m-3 transition-all cursor-pointer"
    >
      <div className="h-[20rem] p-5">
        <img
          className="h-full w-full object-cover object-left-top"
          src="https://outfitters.com.pk/cdn/shop/files/F0526206634.jpg?v=1716963336"
          alt="Out of Stock"
        />
        <div className="textPart bg-white p-3">
          <div>
            <p>SUPER CROPPED BASIC RIB T-SHIRT</p>
            <div className="flex items-center">
              <p className="text-sm">S/M/L &ensp;</p>
              <Circle color="red" opacity={0.45} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

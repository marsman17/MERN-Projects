import React from "react";

const HomeSectionCard = ({ product }) => {
  return (
    <div
      className="cursor-pointer flex flex-col items-center rounded-sm overflow-hidden w-[15rem]"
      style={{
        backgroundImage: `url(${product.imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="h-[30rem] w-[25rem] flex flex-col justify-around p-4 rounded-lg"></div>
      <div className="bg-white bg-opacity-75 w-full text-center rounded-b-sm">
        <p className="mt-2 text-base tracking-wide text-gray-500 pt-4">
          <h3 className="text-lg font-normal tracking-widest text-gray-900 pb-2">
            {product.title}
          </h3>
          <span className="text-grey-700 line-through">{product.price}</span>
          <span>&ensp;</span>
          <span className="text-grey-900 bg-yellow-300">
            &nbsp; {product.discountedPrice} &emsp; &ensp;
          </span>
          <span className="text-xs -ml-7 text-grey-900">
            {" "}
            -{product.discountPercent}%
          </span>
          <br />
          <br />
        </p>
      </div>
    </div>
  );
};

export default HomeSectionCard;

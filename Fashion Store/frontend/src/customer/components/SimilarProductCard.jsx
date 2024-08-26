import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const SimilarProductCard = ({ products }) => {
  const carouselOptions = {
    mouseTracking: true,
    responsive: {
      0: { items: 4 },
      768: { items: 6 },
      1024: { items: 8 },
    },
    disableDotsControls: true,
  };

  return (
    <AliceCarousel {...carouselOptions}>
      {products.map((product, index) => (
        <div
          key={index}
          className="relative w-[5rem] lg:w-[9rem] lg:h-[9rem] rounded-sm overflow-hidden"
        >
          <img
            className="w-full h-full object-cover rounded-sm transition-transform duration-300 transform hover:scale-105"
            src={product.imageUrl}
            alt={product.title}
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-center text-white bg-black bg-opacity-20 opacity-0 transition-opacity duration-300 hover:opacity-100">
            <div className="text-left space-y-1 px-2 mt-2">
              <p className="font-normal text-md">{product.title}</p>
              <p className="opacity-90 text-gray-900 text-sm tracking-tight">
                {product.color}
              </p>
              <div className="flex space-x-3 items-center text-sm lg:text-sm text-gray-900">
                <p className="text-gray-900 opacity-90 line-through">
                  PKR {product.price}
                </p>
                <span className="text-gray-800 px-1 rounded-sm bg-yellow-300 relative">
                  {product.discountedPrice}
                  <span className="text-xs -ml-5 text-black">
                    &emsp;&emsp;-{product.discountPercent}%
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </AliceCarousel>
  );
};

export default SimilarProductCard;

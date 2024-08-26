import React from "react";
import { mens_shirt } from "../../Data/mens_shirt";
import Circle from "./Circle";

const ProductGrid = () => {
  const products = mens_shirt.map((shirt) => ({
    id: shirt.title.replace(/\s+/g, "-").toLowerCase(),
    name: shirt.title,
    href: "#",
    price: shirt.price,
    discountedPrice: shirt.discountedPrice,
    discountPercent: shirt.discountPercent,
    imageSrc: shirt.imageUrl,
    imageAlt: shirt.title,
    color: shirt.color,
  }));

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <a
              key={product.id}
              href={product.href}
              className="flex flex-col rounded-lg shadow-lg relative group"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 transition-transform duration-300 transform hover:translate-y-[-2rem] hover:shadow-lg hover: border-white relative">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pb-5">
                  <span className="absolute bg-yellow-500 rounded-sm -py-2 px-1 transition-opacity duration-300 text-white text-lg hover:opacity-0">
                    GET PROMO CODE!
                  </span>
                  <span className="text-yellow-400 text-xl hover:opacity-300">
                    SUMMER24
                  </span>
                </div>
              </div>
              <div className="textPart transition-transform duration-300 transform rounded-b-lg -translate-y-0 absolute bottom-0 left-0 w-full px-4 py-2 bg-white hover:shadow-lg">
                <h3 className="text-m text-gray-800">{product.name}</h3>
                <p className="mt-1 text-sm font-medium text-gray-900">
                  <span className="text-gray-700 line-through">
                    PKR{product.price}
                  </span>
                  <span>&ensp;&nbsp;</span>
                  <span className="text-gray-900 px-1 pt-1 bg-yellow-300">
                    {product.discountedPrice} &emsp; &ensp;
                    <span className="text-xs -ml-5 text-grey-900">
                      -{product.discountPercent}%
                    </span>
                  </span>
                  <p className="text-xs text-gray-800 pt-2">
                    S/M/L &emsp;
                    <Circle
                      color={product.color.toLowerCase()}
                      opacity={0.45}
                    />
                  </p>
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;

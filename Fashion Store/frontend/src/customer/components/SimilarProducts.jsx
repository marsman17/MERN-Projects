import React from "react";
import SimilarProductCard from "./SimilarProductCard";
import { mens_shirt } from "../../Data/mens_shirt";

const SimilarProducts = () => {
  return (
    <section>
      <div className="p-5 shadow-sm flex flex-row space-x-5 pl-10 border rounded-md relative overflow-hidden">
        <SimilarProductCard products={mens_shirt} />
      </div>
      <br />
      <br />
      <br />
      <br />
    </section>
  );
};

export default SimilarProducts;

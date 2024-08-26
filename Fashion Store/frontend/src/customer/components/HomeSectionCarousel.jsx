import React from "react";
import { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "./HomeSectionCard";
import { mens_shirt } from "../../Data/mens_shirt";
const HomeSectionCarousel = ({ sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };
  const syncActiveIndex = ({ item }) => setActiveIndex(item);
  const items = mens_shirt
    .slice(0, 10)
    .map((item) => <HomeSectionCard product={item} />);
  return (
    <div className="border rounded-md bg-gray-100 bg-opacity-40 shadow-lg">
      <h2 className="text-xl tracking-wider font-normal text-gray-800 pt-4">
        {sectionName}
      </h2>
      <p className="text-yellow-200 font-medium -mt-4">______________</p>
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
      </div>
    </div>
  );
};

export default HomeSectionCarousel;

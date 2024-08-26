import React from "react";
import MainCarousel from "../components/MainCarousel";
import HomeSectionCarousel from "../components/HomeSectionCarousel";
import HomeSectionCarouselWomen from "../components/HomeSectionCarouselWomen";
import HomeSectionCarouselAccessories from "../components/HomeSectionCarouselAccessories";

const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel sectionName={"Menswear"} />
        <HomeSectionCarouselWomen sectionName={"Womenswear"} />
        <HomeSectionCarouselAccessories sectionName={"Accessories"} />
      </div>
    </div>
  );
};

export default HomePage;

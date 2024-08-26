import React from "react";
import Banner from "../Components/Banner";
import About from "../Components/About";
import Services from "../Components/Services";
import Testimonials from "../Components/Testimonials";
import Projects from "../Components/Projects";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Testimonials />
      <Projects />
    </div>
  );
};

export default HomePage;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "../Components/Navigation";
import HomePage from "../Pages/HomePage";
import ContactUs from "../Pages/ContactUs";
import HiringVacancy from "../Pages/HiringVacancy";
import Footer from "../Components/Footer";
import WhyChooseUs from "../Pages/WhyChooseUs";
import Services from "../Pages/Services";
import Login from "../Pages/Login";
import Logout from "../Pages/Logout";
import ProfilePortal from "../Pages/ProfilePortal";

const AppRoutes = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/contactus" element={<ContactUs />}></Route>
        <Route path="/hiring" element={<HiringVacancy />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/whyus" element={<WhyChooseUs />}></Route>
        <Route path="/myprofile" element={<ProfilePortal />}></Route>
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AppRoutes;

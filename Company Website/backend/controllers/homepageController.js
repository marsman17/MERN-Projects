const Banner = require("../models/Banner");
const Service = require("../models/Service");
const Testimonial = require("../models/Testimonial");
const Project = require("../models/Project");
exports.getHomePageData = async (req, res) => {
  try {
    const banners = await Banner.find();
    const services = await Service.find();
    const testimonials = await Testimonial.find();
    const projects = await Project.find();
    res.json({
      banners,
      services,
      testimonials,
      projects,
    });
  } catch (error) {
    console.error("Error fetching homepage data:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authMiddleware = require("./middleware/authMiddleware");
const companyRoutes = require("./routes/companyRoutes");
const contactRoutes = require("./routes/contactRoutes");
const jobRoutes = require("./routes/jobRoutes");
const whyUsRoutes = require("./routes/whyUsRoutes");
const servicesRoutes = require("./routes/servicesRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const homePageRoutes = require("./routes/homePageRoutes");
const testimonialsRoutes = require("./routes/testimonialsRoutes");
const projectsRoutes = require("./routes/projectsRoutes");
dotenv.config();
const app = express();
app.use(express.json());
app.use(authMiddleware);
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));
app.use("/api/home", homePageRoutes);
app.use("/api/company", companyRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/why-us", whyUsRoutes);
app.use("/api/services", servicesRoutes);
app.use("/api/service", serviceRoutes);
app.use("/api/testimonials", testimonialsRoutes);
app.use("/api/projects", projectsRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

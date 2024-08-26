const mongoose = require("mongoose");
const servicesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  projects: [{ type: String }],
});
const Services = mongoose.model("Services", servicesSchema);
module.exports = Services;

const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  name: String,
  description: String,
  founded: Number,
  employees: Number,
});

module.exports = mongoose.model("Company", companySchema);

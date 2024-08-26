const mongoose = require("mongoose");

const successStorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  outcome: { type: String, required: true },
});

module.exports = mongoose.model("SuccessStory", successStorySchema);

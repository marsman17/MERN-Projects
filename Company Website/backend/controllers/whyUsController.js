const Strength = require("../models/Strength");
const Differentiator = require("../models/Differentiator");
const SuccessStory = require("../models/SuccessStory");

exports.getStrengths = async (req, res) => {
  try {
    const strengths = await Strength.find();
    res.status(200).json(strengths);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.getDifferentiators = async (req, res) => {
  try {
    const differentiators = await Differentiator.find();
    res.status(200).json(differentiators);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.getSuccessStories = async (req, res) => {
  try {
    const successStories = await SuccessStory.find();
    res.status(200).json(successStories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

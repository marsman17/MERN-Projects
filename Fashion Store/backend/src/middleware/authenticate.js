const jwtProvider = require("../config/jwtProvider.js");
const userService = require("../services/user.service.js");
const authenticate = async (req, res, next) => {
  try {
    const token = req.header.authorization?.split(" ")[1];
    if (!token) {
      return req.status(404).send({ error: "Token not found." });
    }
    const userId = jwtProvider.getUserIdFromToken(token);
    const user = userService.findUserById(userId);
    req.user = user;
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
  next();
};
module.exports = authenticate;

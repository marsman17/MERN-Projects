const mongoose = require("mongoose");
//around the 15th min's mark - create a mongodb url and paste it here
const mongodbUrl =
  "mongodb+srv://muhammadahmadnaveed001:PsNlKvbuzQ4REvmA@cluster0.kjnsd5i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDb = () => {
  return mongoose.connect(mongodbUrl);
};

module.exports = { connectDb };

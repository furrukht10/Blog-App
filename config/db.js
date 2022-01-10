const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const connections =
  "mongodb+srv://furrukh:querty0987@natours.buawm.mongodb.net/blog?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(connections, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;

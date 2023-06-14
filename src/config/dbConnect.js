const mongoose = require("mongoose");
const config = require("config");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://abbesmohamed45:XSBmGDrJflDaDIdw@paparlessdb.jl1mbn0.mongodb.net/paperless", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("is connected ....");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;

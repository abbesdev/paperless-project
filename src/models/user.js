const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
  dateOfBirth: Date,
  interests: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  country: String,
  avatar :String,
  followers : {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  savedArticles : {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Article"
  }


},
{timestamps : true}
);

const User = mongoose.model("User", userSchema);

module.exports = User;
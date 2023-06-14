const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
  title: String,
  content: String,
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }],
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
 
},{timestamps:true});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
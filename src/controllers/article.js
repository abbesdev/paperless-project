const Article = require("../models/article");

exports.getArticles = async (req, res) => {
  try {
    const articles = await Article.find().populate("likes", "fullName");
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getArticleById = async (req, res) => {
  const { id } = req.params;
  try {
    const article = await Article.findById(id).populate("likes", "fullName");
    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }
    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createArticle = async (req, res) => {
  const { title, content, likes, category, author } = req.body;
  try {
    const newArticle = new Article({
      title,
      content,
      likes,
      category,
      author
    });
    const savedArticle = await newArticle.save();
    res.status(201).json(savedArticle);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateArticle = async (req, res) => {
  const { id } = req.params;
  const { title, content, likes, category, author } = req.body;
  try {
    const updatedArticle = await Article.findByIdAndUpdate(
      id,
      {
        title,
        content,
        likes,
        category,
        author
      },
      { new: true }
    );
    if (!updatedArticle) {
      return res.status(404).json({ message: "Article not found" });
    }
    res.status(200).json(updatedArticle);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteArticle = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedArticle = await Article.findByIdAndDelete(id);
    if (!deletedArticle) {
      return res.status(404).json({ message: "Article not found" });
    }
    res.status(200).json({ message: "Article deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.addLike = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;
  try {
    const article = await Article.findById(id);
    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }
    if (article.likes.includes(userId)) {
      return res.status(400).json({ message: "User already liked this article" });
    }
    article.likes.push(userId);
    const updatedArticle = await article.save();
    res.status(200).json(updatedArticle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

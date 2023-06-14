const express = require("express");

const articleController = require("../controllers/article");

const router = express.Router();

// Get all articles
router.get("/", articleController.getArticles);

// Get a specific article by ID
router.get("/:id", articleController.getArticleById);

// Create a new article
router.post("/", articleController.createArticle);

// Update an existing article
router.put("/:id", articleController.updateArticle);

// Delete an article
router.delete("/:id", articleController.deleteArticle);

// Add a like to an article
router.post("/:id/like", articleController.addLike);

module.exports = router;

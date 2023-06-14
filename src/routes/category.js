const express = require("express");

const categoryController = require("../controllers/category");

const router = express.Router();

// Get all categories
router.get("/", categoryController.getCategories);

// Get a specific category by ID
router.get("/:id", categoryController.getCategoryById);

// Create a new category
router.post("/", categoryController.createCategory);

// Update an existing category
router.put("/:id", categoryController.updateCategory);

// Delete a category
router.delete("/:id", categoryController.deleteCategory);

module.exports = router;

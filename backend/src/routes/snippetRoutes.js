const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const snippetController = require("../controllers/snippetController");
const authMiddleware = require("../middleware/authMiddleware");

// Auth Routes
router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);

// Snippet Routes
router.post("/", authMiddleware.verifyToken, snippetController.generateSnippet);

module.exports = router;

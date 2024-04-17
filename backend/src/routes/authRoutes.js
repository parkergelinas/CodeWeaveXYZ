// src/routes/authRoutes.js
const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const router = express.Router();

// Sign Up
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = await User.create({ username, password: hashedPassword });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: "Username is already taken" });
  }
});

// Sign In
router.post("/signin", async (req, res) => {
  // Implementation goes here
});

module.exports = router;

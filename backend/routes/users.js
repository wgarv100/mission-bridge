const express = require("express");
const router = express.Router();
const User = require("../models/user");

// POST route to create a new user
router.post("/", async (req, res) => {
  try {
    const newUser = new User({
      // Extract the user information from the request body
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      // Add other user properties as needed
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    // Send the saved user as a JSON response
    res.json(savedUser);
  } catch (error) {
    console.error(error);
    // Handle server error by sending an error response
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;

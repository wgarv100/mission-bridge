const User = require("../models/usersModel");

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Create a new user instance
    const newUser = new User({ name, email, password });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Failed to register user." });
  }
};

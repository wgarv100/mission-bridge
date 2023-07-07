require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();

const port = process.env.PORT;
const url = process.env.MONGO_URL;

// Import the users route file
const usersRoute = require("./routes/usersRoute");

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB server");

    // Middleware to parse incoming request bodies as JSON
    app.use(express.json());

    // Use the users route
    app.use("/api/users", usersRoute);

    // Start the server
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

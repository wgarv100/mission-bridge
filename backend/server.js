require("dotenv").config();

const mongoose = require("mongoose");

const express = require("express");
const app = express();

const port = process.env.PORT;
const url = process.env.MONGO_URL;

const User = require("./models/user");
const userController = require("./controllers/userController");

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB server");

    app.use(express.json());

    app.post("/api/users", userController.createUser);

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

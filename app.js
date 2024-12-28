require("dotenv").config();
const mongoose = require("mongoose");
const { initConsumer } = require("./events/consumer");
const express = require("express");
const notificationRoutes = require("./routes/notificationRoutes");

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err.message));

initConsumer();

// Routes
app.use("/notifications", notificationRoutes);


module.exports = app;
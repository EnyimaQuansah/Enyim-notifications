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

// Health check route
app.get('/health', (req, res) => {
  res.status(200).json({ message: 'Notifications service is healthy' });
});

// Routes
app.use("/notifications", notificationRoutes);

module.exports = app;

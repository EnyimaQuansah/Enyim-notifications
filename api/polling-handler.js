const { initConsumer } = require("./events/consumer");

module.exports = async (req, res) => {
  try {
    await initConsumer();  // Start the polling consumer
    res.status(200).send("Polling started successfully");
  } catch (error) {
    console.error("Error initializing polling:", error.message);
    res.status(500).send("Failed to start polling");
  }
};

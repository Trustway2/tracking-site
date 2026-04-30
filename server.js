const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// بياناتك الحالية (نفس اللي في الموقع)
const trackingData = {
  tracking_number: "123456",
  status: "In Transit",
  location: "Cairo",
  estimated_delivery: "2026-05-05"
};

// API endpoint
app.get("/api/track", (req, res) => {
  res.json(trackingData);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

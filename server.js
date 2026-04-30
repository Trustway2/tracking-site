const express = require("express");
const app = express();

app.get("/api/tracking", (req, res) => {
  res.json({
    status: "In Transit",
    location: "Cairo, Egypt",
    container: "MSKU1234567",
    lastUpdate: "2026-04-30"
  });
});

app.get("/", (req, res) => {
  res.send("API is running");
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

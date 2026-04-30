const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// بياناتك الثابتة (زي الموقع بالظبط)
const myTracking = {
  tracking_number: "HC1001",
  status: "IN TRANSIT",
  customer: "Mustafa fathelrhman",
  shipment: "Solar powered ev charging devices",
  from: "Shenzhen Port, China",
  to: "Umm Qasr Port, Iraq",
  price: "$2900",
  arrival: "7 May 2026",
  image: "/bill.png" // نفس الصورة عندك
};

// Mock بيانات لأي كود تاني
const mockData = {
  tracking_number: "XXXX",
  status: "Processing",
  customer: "Test User",
  shipment: "Sample shipment",
  from: "Unknown",
  to: "Unknown",
  price: "$0",
  arrival: "N/A",
  image: "/bill.png"
};

// API
app.get("/api/track/:code", (req, res) => {
  const code = req.params.code;

  // لو الكود بتاعك
  if (code === "HC1001") {
    return res.json(myTracking);
  }

  // أي كود تاني
  return res.json({ ...mockData, tracking_number: code });
});

// تشغيل السيرفر
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

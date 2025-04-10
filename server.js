const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const FILE_PATH = "feedbacks.json";

// Submit feedback
app.post("/submit-feedback", (req, res) => {
  const feedback = { ...req.body, timestamp: new Date().toLocaleString() };

  let data = [];
  if (fs.existsSync(FILE_PATH)) {
    data = JSON.parse(fs.readFileSync(FILE_PATH));
  }

  data.push(feedback);
  fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
  res.status(200).json({ message: "Feedback saved" });
});

// Get feedbacks
app.get("/feedbacks", (req, res) => {
  let data = [];
  if (fs.existsSync(FILE_PATH)) {
    data = JSON.parse(fs.readFileSync(FILE_PATH));
  }

  res.status(200).json(data);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

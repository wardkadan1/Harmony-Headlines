/* eslint-disable no-undef */
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

const DATA_FILE = path.resolve(__dirname, "data.json");

app.use(cors());
app.use(express.json());

const readData = () => {
  try {
    const data = fs.readFileSync(DATA_FILE, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading data file:", error.message);
  }
};
const data = readData();

const writeData = () => {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error writing to data file:", error.message);
  }
};

app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

app.get("/data", (req, res) => {
  res.json(data);
});

app.post("/initial-mood", (req, res) => {
  const allData = req.body;

  data.push({ allData });
  writeData(data);
  res.json({ message: "Initial mood data saved successfully", allData });
});

app.post("/change-mood", (req, res) => {
  const { desiredNews, adjustedNews } = req.body;

  data.push({ type: "change-mood", desiredNews, adjustedNews });
  writeData(data);

  res.json({
    message: "Mood adjustment data saved successfully",
    adjustedNews,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

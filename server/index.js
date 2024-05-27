require("dotenv").config();
const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 5000;
const cors = require("cors");

app.use(
  cors({
    credentials: true,
    origin: process.env.VITE_URL,
  })
);

app.get("/tech-headlines", async (req, res) => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${process.env.NEWS_API_KEY}`
    );
    res.json(response.data.articles);
  } catch (error) {
    res.status(500).send("Error fetching news");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

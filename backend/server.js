require("dotenv").config();
console.log("KEY:", process.env.GEMINI_API_KEY);
const express = require("express");
const cors = require("cors");
const path = require("path");

const projectRoutes = require("./routes/projectRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Serve frontend files
app.use(
  express.static(
    path.join(__dirname, "../frontend")
  )
);

// Home page
app.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../frontend/index.html")
  );
});

app.use("/api/project", projectRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
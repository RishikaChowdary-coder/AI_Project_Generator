require("dotenv").config();
console.log("KEY:", process.env.GEMINI_API_KEY);
const express = require("express");
const cors = require("cors");

const projectRoutes =
require("./routes/projectRoutes");

const app = express();

app.get("/", (req, res) => {
  res.send("AI Project Generator Backend is Running!");
});

app.use(cors());
app.use(express.json());

app.use(
    "/api/project",
    projectRoutes
);

const PORT =
process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(
        `Server running on port ${PORT}`
    );
});
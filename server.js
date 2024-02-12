require("dotenv").config();
const express = require("express");
const connectDb = require("./db/connect");
const PORT = process.env.PORT || 3000;
const Router = require("./routes/auth");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(Router);

app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "frontend", "dist")));
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});

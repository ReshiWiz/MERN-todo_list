import express from "express";
import connectDB from "./config/ConnectDB.js"

const app = express();

connectDB();
// Routes
app.get("/", (req, res) => {
  res.send("home Page for first time");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on server ${PORT}`);
});

// npm i mongoose

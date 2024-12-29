import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("node api running");
  res.json({ message: "get api" });
});

app.listen(3001, () => {
  console.log("Server running on port 3000");
});

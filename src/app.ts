import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Express Server is Running with nodemon ");
});

export default app;

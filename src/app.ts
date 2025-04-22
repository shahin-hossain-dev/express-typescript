import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Express Server is Running ");
});

export default app;

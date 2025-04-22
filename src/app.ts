import express, { Request, Response } from "express";

const app = express();

//parser middleware
app.use(express.json()); //json file parse করার জন্য ব্যবহার করা হয়।
app.use(express.text()); //plain text parse করার জন্য ব্যবহার করা হয়।

app.get("/", (req: Request, res: Response) => {
  res.send("Express Server is Running with nodemon ");
});

app.post("/another", (req: Request, res: Response) => {
  console.log(req.body);

  //   res.send("Successful hit");
  res.json({
    message: "Successfully received data",
  });
});

export default app;

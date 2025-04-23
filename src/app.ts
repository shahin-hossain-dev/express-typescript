import express, { NextFunction, Request, Response } from "express";

const app = express();

//parser middleware
app.use(express.json()); //json file parse করার জন্য ব্যবহার করা হয়।
app.use(express.text()); //plain text parse করার জন্য ব্যবহার করা হয়।

//CUSTOM MIDDLEWARE

const logger = (req: Request, res: Response, next: NextFunction) => {
  req.body = "Shahin";
  next();
};

//get params value
app.get("/users/:userId/:storeId", (req: Request, res: Response) => {
  const { userId, storeId } = req?.params; //get params
  res.json({ message: `user id = ${userId}, store id = ${storeId}` });
});

//get query values
app.get("/users", (req: Request, res: Response) => {
  const { email } = req.query;
  console.log(email);
  res.json({ email });
});

//use middleware

app.post("/another", logger, (req: Request, res: Response) => {
  console.log(req.body);
  console.log(req.params);
  //   res.send("Successful hit");
  res.json({
    message: "Successfully received data",
  });
});

export default app;

/**
 * middleware
 * middleware হলো একটা function যা কোনো request এবং response এর মাঝামাঝি বসে কিছু অপারেশন করে
 * next() function এর মাধম্যে কল করে, কল করলে সে request function এর মধ্যে ঢুকবে।
 * যদি middleware function condition না মিলে তখন middleware থেকে error response করে।
 * request route এর মধ্যে ঢুকবে না। এটাই হলো middleware.
 */

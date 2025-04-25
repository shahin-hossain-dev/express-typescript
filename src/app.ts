import express, { NextFunction, Request, Response } from "express";

const app = express();
const userRouter = express.Router();
const courseRouter = express.Router();

//parser middleware
app.use(express.json()); //json file parse করার জন্য ব্যবহার করা হয়।
app.use(express.text()); //plain text parse করার জন্য ব্যবহার করা হয়।
app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);

//CUSTOM MIDDLEWARE
const logger = (req: Request, res: Response, next: NextFunction) => {
  req.body = "Shahin";
  next();
};

//use router
userRouter.post("/create-user", (req: Request, res: Response) => {
  const user = req.body;
  res.json({
    success: true,
    message: "User created Successfully",
    user,
  });
});

//user router
courseRouter.post("/create-course", (req: Request, res: Response) => {
  const course = req.body;

  res.status(200).json({
    success: true,
    message: "Course create successfully",
    course,
  });
});

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

// routing with error handler
app.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json({
      name: "Shahin",
    });
    // res.send(something);
  } catch (error) {
    next(error);
    // res.status(400).json({
    //   success: false,
    //   message: "Something Went Wrong",
    // });
  }
});

// not found route handle
// যদি user not existing route এ hit করে তাহলে সে  একটি error message পাবে
// এই route error function সব router এর নিচে রাখতে হবে।
// app.all("*", (req: Request, res: Response, next: NextFunction) => {
//   res.status(400).json({
//     success: false,
//   });
// });

//global error handler
// সকল router এর error কে এই global handler দিয়ে handle করা যাবে।
// শুধু router এর মধ্যে থেকে catch এর মধ্যে error ধরলে সেই error next(error) এর মধ্যে error কে call করে দিতে হবে।

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    res.status(400).json({
      success: false,
      message: "Something went Wrong",
    });
  }
});

export default app;

/**
 * middleware
 * middleware হলো একটা function যা কোনো request এবং response এর মাঝামাঝি বসে কিছু অপারেশন করে
 * next() function এর মাধম্যে কল করে, কল করলে সে request function এর মধ্যে ঢুকবে।
 * যদি middleware function condition না মিলে তখন middleware থেকে error response করে।
 * request route এর মধ্যে ঢুকবে না। এটাই হলো middleware.
 */

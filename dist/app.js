"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
//parser middleware
app.use(express_1.default.json()); //json file parse করার জন্য ব্যবহার করা হয়।
app.use(express_1.default.text()); //plain text parse করার জন্য ব্যবহার করা হয়।
app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);
//CUSTOM MIDDLEWARE
const logger = (req, res, next) => {
    req.body = "Shahin";
    next();
};
//use router
userRouter.post("/create-user", (req, res) => {
    const user = req.body;
    res.json({
        success: true,
        message: "User created Successfully",
        user,
    });
});
//user router
courseRouter.post("/create-course", (req, res) => {
    const course = req.body;
    res.status(200).json({
        success: true,
        message: "Course create successfully",
        course,
    });
});
//get params value
app.get("/users/:userId/:storeId", (req, res) => {
    const { userId, storeId } = req === null || req === void 0 ? void 0 : req.params; //get params
    res.json({ message: `user id = ${userId}, store id = ${storeId}` });
});
//get query values
app.get("/users", (req, res) => {
    const { email } = req.query;
    console.log(email);
    res.json({ email });
});
//use middleware
app.post("/another", logger, (req, res) => {
    console.log(req.body);
    console.log(req.params);
    //   res.send("Successful hit");
    res.json({
        message: "Successfully received data",
    });
});
exports.default = app;
/**
 * middleware
 * middleware হলো একটা function যা কোনো request এবং response এর মাঝামাঝি বসে কিছু অপারেশন করে
 * next() function এর মাধম্যে কল করে, কল করলে সে request function এর মধ্যে ঢুকবে।
 * যদি middleware function condition না মিলে তখন middleware থেকে error response করে।
 * request route এর মধ্যে ঢুকবে না। এটাই হলো middleware.
 */

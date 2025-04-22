"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//parser middleware
app.use(express_1.default.json()); //json file parse করার জন্য ব্যবহার করা হয়।
app.use(express_1.default.text()); //plain text parse করার জন্য ব্যবহার করা হয়।
app.get("/", (req, res) => {
    res.send("Express Server is Running with nodemon ");
});
app.post("/another", (req, res) => {
    console.log(req.body);
    //   res.send("Successful hit");
    res.json({
        message: "Successfully received data",
    });
});
exports.default = app;

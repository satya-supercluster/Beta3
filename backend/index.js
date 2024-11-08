// Requires
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
dotenv.config();
const app = express();

// Mongoose Connection
import {connectDB} from "./config/mongo/mongo-con.js";
connectDB();
// Checking the server
app.get("/", (req, res) => {
  res.send("Everything is alright");
});


// Cross Origin Policy
app.use(cors());

// middlewares
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Listening the server
app.listen(process.env.PORT, () => {
  console.log(`I listened something at PORT ${process.env.PORT}`);
});
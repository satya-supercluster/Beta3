// Requires
const express = require("express"),
  app = express();
const dotenv = require("dotenv");
dotenv.config();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
require("./config/mongo/mongo-con");
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
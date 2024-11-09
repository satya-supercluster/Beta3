// Requires
const express = require("express"),
  app = express();
const dotenv = require("dotenv");
dotenv.config();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

// Mongoose Connection
const connectDB = require("./config/mongo/mongo-con.js");
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
const verifyToken = require("./middleware/verifyToken.js");


//Routes
const consumerRoute = require("./routes/Consumer/consumerRoutes.js");
const authRouter = require("./routes/authRouter/authRouter.js");
const providerRoute = require("./routes/Provider/providerRoutes.js");
app.use("/auth", verifyToken, authRouter);
app.use("/consumer", consumerRoute);
app.use("/provider", providerRoute);

// Listening the server
app.listen(process.env.PORT, () => {
  console.log(`I listened something at PORT ${process.env.PORT}`);
});

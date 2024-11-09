const express = require("express");
const authRouter = express.Router();
const authControllerProvider = require("../../controller/Provider/authControllerProvider.js");
const authControllerConsumer = require("../../controller/Consumer/authControllerConsumer.js");

authRouter.use("/provider", authControllerProvider);
authRouter.use("/consumer", authControllerConsumer);

module.exports=authRouter
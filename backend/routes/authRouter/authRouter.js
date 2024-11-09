const express = require("express");
const authRouter = express.Router();
const authControllerProvider = require("../../controller/Provider/authControllerProvider.js");
const authControllerConsumer = require("../../controller/Consumer/authControllerConsumer.js");

authRouter.post("/provider", authControllerProvider);
authRouter.post("/consumer", authControllerConsumer);

module.exports=authRouter

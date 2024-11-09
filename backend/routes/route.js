const express = require("express");
const router = express.Router();

const consumerRoute = require("./Consumer/consumerRoute.js");
const authRouter = require("./authRouter/authRouter.js");
const providerRoute = require("./Provider/providerRoutes.js");

router.use("/auth", authRouter);
router.use("/provider", providerRoute);
router.use("/consumer", consumerRoute);
module.export = router;

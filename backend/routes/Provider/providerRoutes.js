const express = require("express");
const addEvent = require("../../controller/Provider/addEvent");
const editProfileProvider = require("../../controller/Provider/editProfileProvider");
const verifyToken = require("../../middleware/verifyToken");
const getProviderEvent = require("../../controller/Provider/getProviderEvent");
// const addEventBulk = require("../../controller/Provider/addEvent");
const providerRoute = express.Router();

providerRoute.put("/editprofile", editProfileProvider);
providerRoute.post("/addevent",addEvent );
providerRoute.get("/getevents",verifyToken, getProviderEvent);
// providerRoute.post("/addeventbulk",addEventBulk);
module.exports=providerRoute
const express = require("express");
const addEvent = require("../../controller/Provider/addEvent");
const editProfileProvider = require("../../controller/Provider/editProfileProvider");
const addEventBulk = require("../../controller/Provider/addEvent");
const providerRoute = express.Router();

providerRoute.put("/editprofile", editProfileProvider);
providerRoute.post("/addevent",addEvent );
providerRoute.post("/addeventbulk",addEventBulk);
module.exports=providerRoute
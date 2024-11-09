const express = require("express");
const editProfile = require("../../controller/Provider/editProfile");
const addEvent = require("../../controller/Provider/addEvent");
const providerRoute = express.Router();

providerRoute.post("/editProfile", editProfile);
providerRoute.post("/addEvent",addEvent );
module.exports=providerRoute
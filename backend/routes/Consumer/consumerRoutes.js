const express = require("express");
const editProfileConsumer = require("../../controller/Consumer/editProfileConsumer");
const getEvents = require("../../controller/Consumer/getEvents");
const consumerRoute = express.Router();

consumerRoute.get("/getevents", getEvents);
consumerRoute.put("/editProfile", editProfileConsumer);
module.exports=consumerRoute

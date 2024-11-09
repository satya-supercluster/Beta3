const express = require("express");
const editProfileConsumer = require("../../controller/Consumer/editProfileConsumer");
const {getEvents, getByteEvents, getDonorEvent} = require("../../controller/Consumer/getEvents");
const consumerRoute = express.Router();

consumerRoute.get("/getevents", getEvents);
consumerRoute.get("/getbyte", getByteEvents);
consumerRoute.get("/getdonor", getDonorEvent);
consumerRoute.put("/editProfile", editProfileConsumer);
module.exports=consumerRoute
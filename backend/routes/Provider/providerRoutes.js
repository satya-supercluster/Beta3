const express = require("express");
const editProfile = require("../../controller/Provider/editProfile");
const providerRoute = express.Router();

providerRoute.post("/editProfile",editProfile );
module.exports=providerRoute
const mongoose = require("mongoose");
const consumer = new mongoose.Schema({
    name:{
        type:String,
        // required:true,
    },
    email:{
        type:String,
        // required:true,
        unique:true,
    },
    password: {
        type: String,
        // required: true,
        minlength: 5
    },
    location:{
        type:String
    },
    avatar:{
        type:String
    }
});

const Consumer = mongoose.model("Consumer", consumer); 
module.exports=Consumer
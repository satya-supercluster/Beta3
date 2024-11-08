import mongoose from 'mongoose'

const events = new mongoose.Schema({
    name:{
        type:String,
        // required:true,
    },
    Date:{
        type:Date,
        default:Date.now(),
    },
    Venue:{
        type:String
    },
    Quantity:{
        type:String
    },
    expectedWastage:{
        type:Number,
        default:0,
    },
    location:{
        type:String
    },
    Duration:{
        type:Number,
    }
});

export const Events = mongoose.model("Events", events); 
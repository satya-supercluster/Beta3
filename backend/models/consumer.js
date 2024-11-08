import mongoose from 'mongoose'

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
    }
});

export const Consumer = mongoose.model("Consumer", consumer); 
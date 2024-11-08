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
        match:/^[a-zA-Z0-9._%+-]+@i[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
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

export const Consumer = mongoose.model("Consumer", consumer); 
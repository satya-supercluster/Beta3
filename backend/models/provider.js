import mongoose from 'mongoose'

const provider = new mongoose.Schema({
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
    events:{
        type:Array
    },
    location:{
        type:String
    }
});

export const Provider = mongoose.model("Provider", provider); 
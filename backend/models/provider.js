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
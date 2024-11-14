const mongoose = require("mongoose");
const provider = new mongoose.Schema({
  name: {
    type: String,
    // required:true,
  },
  email: {
    type: String,
    // required:true,
    unique: true,
  },
  contact: {
    type: String,
  },
  password: {
    type: String,
    // required: true,
    minlength: 5,
  },
  events: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Events",
    },
  ],
  location: {
    type: String,
  },
  avatar: {
    type: String,
  },
  subscribers:{
    type:Number,
    default:0
  }
});

const Provider = mongoose.model("Provider", provider);
module.exports=Provider
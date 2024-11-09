const mongoose = require("mongoose");

const events = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  Date: {
    type: Date,
    default: Date.now(),
  },
  Venue: {
    type: String,
  },
  Quantity: {
    type: String,
  },
  expectedWastage: {
    type: Number,
    default: 0,
  },
  provider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Provider",
    required: true,
  },
  coordinates: {
    lat: {
      type: Number,
      // required: true,
    },
    lon: {
      type: Number,
      // required: true,
    },
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
});

const Events = mongoose.model("Events", events);
module.exports = Events;

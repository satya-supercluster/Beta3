const mongoose = require("mongoose");
const Provider = require("../../models/provider");
const Events = require("../../models/events");

const addEvent = async (req, res) => {
  try {
    const {
      name,
      Date,
      Venue,
      Quantity,
      expectedWastage,
      provider, 
      coordinates,
      startTime,
      endTime,
    } = req.body;

    const newEvent = new Events({
      name,
      Date,
      Venue,
      Quantity,
      expectedWastage,
      provider, 
      coordinates,
      startTime,
      endTime,
    });

    const newEventRes = await newEvent.save();
    await Provider.findByIdAndUpdate(
      provider,
      { $push: { events: newEventRes._id } }, 
      { new: true } 
    );

    res.status(201).json({
      message: "Event added successfully",
      event: newEventRes,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error adding event", error: err.message });
  }
};

module.exports = addEvent;

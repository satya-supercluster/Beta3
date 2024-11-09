const addEvent=async (req, res) => {
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

    await newEvent.save();
    res
      .status(201)
      .json({ message: "Event added successfully", event: newEvent });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error adding event", error: err.message });
  }
};
module.exports = addEvent;
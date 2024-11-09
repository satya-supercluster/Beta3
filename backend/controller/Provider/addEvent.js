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
    // const addEventBulk = async (req, res) => {
    //   try {
    //     const eventsData = req.body; // Assuming req.body is an array of event objects
    //     const savedEvents = []; // To hold the saved event results

    //     for (const eventData of eventsData) {
    //       const {
    //         name,
    //         Date,
    //         Venue,
    //         Quantity,
    //         expectedWastage,
    //         provider, 
    //         coordinates,
    //         startTime,
    //         endTime,
    //       } = eventData;

    //       const newEvent = new Events({
    //         name,
    //         Date,
    //         Venue,
    //         Quantity,
    //         expectedWastage,
    //         provider, 
    //         coordinates,
    //         startTime,
    //         endTime,
    //       });

    //       const newEventRes = await newEvent.save();
    //       savedEvents.push(newEventRes._id); // Store the event ID for the provider update
    //     }

    //     // Update the provider with all new event IDs
    //     if (eventsData.length > 0) {
    //       const providerId = eventsData[0].provider; // Assuming all events have the same provider
    //       await Provider.findByIdAndUpdate(
    //         providerId,
    //         { $push: { events: { $each: savedEvents } } }, // Push all new event IDs
    //         { new: true }
    //       );
    //     }

    //     res.status(201).json({
    //       message: "Events added successfully",
    //       events: savedEvents,
    //     });
    //   } catch (err) {
    //     console.error(err);
    //     res.status(500).json({ message: "Error adding events", error: err.message });
    //   }
    // };


module.exports = addEvent;
// module.exports = addEventBulk;

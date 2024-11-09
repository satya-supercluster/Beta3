const Events = require("../../models/events.js");
const donorEvents = [];
const byteEvents = [];

const seperateEvents = async() =>{
    try {
        const events = await Events.find({});
        events.forEach((event)=>{
            const utcDate = event.endTime;
            const date = new Date(utcDate);
            const currentDate = new Date();
    
            if (date > currentDate && event.isSubscribed) {
                byteEvents.push(event);
            } else {
                donorEvents.push(event);
            }
        })
    } catch (error) {
        console.log(error.message);
    }  
} 
const getByteEvents = async(req, res) =>{
    try {
        seperateEvents();
        return res.status(200).json(byteEvents);
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}
const getDonorEvent = async(req, res) =>{
    try {
        seperateEvents();
        return res.status(200).json(donorEvents);
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}
const getEvents = async(req, res) =>{
    try {
        const response = await Events.find({});
        if(response){
            return res.status(200).json({response:response});
        }
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}
module.exports = {
    getEvents,
    getByteEvents,
    getDonorEvent
};
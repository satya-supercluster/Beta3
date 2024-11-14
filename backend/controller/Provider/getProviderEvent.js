const Events = require("../../models/events");
const Provider = require("../../models/provider");

const fetchEventById = async(eventId)=>{
    try {
        const event = await Events.findById(eventId);

        return event;
    } catch (error) {
        console.log(error.message);
    }
}

const getProviderEvent = async(req, res)=>{
    try {
        const { email } = req.user;
        const providerDetail = await Provider.findOne({email});
        const {events, subscribers} = providerDetail;
        console.log(events, subscribers);
        const eventsPromise = events.map(eventId => fetchEventById(eventId))
        const eventsDetails = await Promise.all(eventsPromise);
        const providerEvents = {
            events:eventsDetails,
            subscribers
        }
        return res.status(200).json(providerEvents);
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}

module.exports = getProviderEvent;
import { Events } from "../../models/events"

export const getEvents = async(req, res) =>{
    try {
        const response = await Events.find({});
        if(response){
            return res.status(200).json(response);
        }
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}
const Provider = require("../../models/provider.js");
const Consumer = require("../../models/consumer.js");

const updateProfile = async(req, res) =>{
    try {
        const {email, name, contact, role, avatar} = req.body;
        const roleChanges = role==="provider" ? Provider : Consumer;
        const userUpdate = await roleChanges.findOneAndUpdate({email}, {
            
        })
    } catch (error) {
        
    }
}
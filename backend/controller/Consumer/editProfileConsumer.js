const Provider = require("../../models/provider.js");
const editProfileConsumer = async (req, res) => {
    try {
        const { email, name, location, contact  } = req.body;
        const updateProfile = await Provider.findOneAndUpdate({email},{
            name,
            location,
            contact 
        });
        if(updateProfile){
            return res.status(200).json({
                message:"Successfully Updated"
            });
        }
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}
module.exports=editProfileConsumer
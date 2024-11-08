import { Consumer } from "../../models/consumer.js";

export const authRouter = async (req, res)=>{
    try {
        const { email, picture, name } = req.user;
        const user = await Consumer.findOne({email});
        if(!user){
            const response = await Consumer.create({
                email,
                name,
                avatar:picture || "/avatar.png",
            });
            if(!response){
                return res.status(500).json({
                    message:error.message
                });
            }
        }
        return res.status(200).json({
            message:user ? "User Created" : "User logged in"
        })
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}
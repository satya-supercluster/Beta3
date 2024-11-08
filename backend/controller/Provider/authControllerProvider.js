import { Provider } from "../../models/provider.js";

export const authControllerProvider = async (req, res)=>{
    try {
        const { userId, email, picture, name } = req.user;
        const user = await Provider.findOne({email});
        if(!user){
            const response = await Provider.create({
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
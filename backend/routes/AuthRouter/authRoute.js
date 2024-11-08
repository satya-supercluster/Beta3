import { Provider } from "../../models/provider.js";

export const authRouter = async (req, res)=>{
    try {
        const { userId, email, picture, name } = req.user;
        const user = await Provider.findOne({email});
        if(!user){
            const response = await Provider.create({
                email,
                name,
                avatar:picture || "/avatar.png",
            });
        }
        return res.status(200).json({
            message:user ? "User Created" : "User logged in"
        })
    } catch (error) {
        
    }
}
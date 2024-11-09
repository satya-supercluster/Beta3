import { Router } from "express";
import { EditProfile } from "../../controller/Provider/editProfile";

export const providerRoute = Router();
providerRoute.post("/editProfile",EditProfile);
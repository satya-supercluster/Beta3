import { Router } from "express";
import { EditProfile } from "../../controller/Provider/editProfile";
import { authControllerProvider } from "../../controller/Provider/authControllerProvider";

export const providerRoute = Router();
providerRoute.post("/editProfile",EditProfile);
providerRoute.post('/', authControllerProvider);
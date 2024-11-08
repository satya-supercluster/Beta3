import { Router } from "express";
import { providerRoute } from "../Provider/editProfile";
import { consumerRoute } from "../Consumer/consumerRoute";

export const authRouter = Router();

authRouter.use('/provider', providerRoute);
authRouter.use('/consumer', consumerRoute);
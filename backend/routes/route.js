import { Router } from "express";
import { authRouter } from "./authRouter/authRouter";
import { providerRoute } from './Provider/providerRoute'
import { consumerRoute } from "./Consumer/consumerRoute";


export const route = Router();
route.use("/auth", authRouter);
route.use("/provider", providerRoute);
route.use("/consumer", consumerRoute);
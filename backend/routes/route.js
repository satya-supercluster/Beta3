import { Router } from "express";
import { authRouter } from "./authRouter/authRouter";


export const route = Router();
route.use("/auth", authRouter);
route.use("/provider", providerRoute);
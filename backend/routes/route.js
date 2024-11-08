import { Router } from "express";


export const route = Router();
route.use("/auth", authRouter);
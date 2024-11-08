import { Router } from "express";


export const route = Router();
route.use("/login", authRouter);
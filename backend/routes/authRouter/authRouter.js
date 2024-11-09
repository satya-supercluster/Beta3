import { Router } from "express";
import { authControllerConsumer } from "../../controller/Consumer/authControllerConsumer.js";
import { authControllerProvider } from "../../controller/Provider/authControllerProvider.js";

export const authRouter = Router();

authRouter.post('/provider', authControllerProvider);
authRouter.post('/consumer', authControllerConsumer);
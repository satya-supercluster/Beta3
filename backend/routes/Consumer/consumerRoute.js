import { Router } from "express";
import { getEvents } from "../../controller/Consumer/getEvents.js";
import { authControllerConsumer } from "../../controller/Consumer/authControllerConsumer.js";

export const consumerRoute = Router();
consumerRoute.get("/getevents", getEvents);
consumerRoute.post('/', authControllerConsumer);

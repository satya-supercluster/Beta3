import { Router } from "express";
import { getEvents } from "../../controller/Consumer/getEvents.js";

export const consumerRoute = Router();
consumerRoute.get("/getevents", getEvents);

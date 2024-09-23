import { Router } from "express";
import { weatherController } from "./controller";

const weatherRouter = Router();

weatherRouter.post("/", weatherController.getWeatherByCity);
weatherRouter.post("/forecast", weatherController.getGroupForeCast);

export default weatherRouter;

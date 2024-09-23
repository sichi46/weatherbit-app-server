import axios, { HttpStatusCode } from "axios";
import { Request, Response } from "express";
import { apiKey, baseUrl } from "../config";

class WeatherController {
  async getWeatherByCity(req: Request, res: Response) {
    try {
      const { city } = req.body;
      const data = await axios.get(
        `${baseUrl}/current?city=${city}&key=${apiKey}`
      );

      if (
        data.status === (HttpStatusCode.BadRequest || HttpStatusCode.NotFound)
      ) {
        return res.status(HttpStatusCode.NotFound).json("No Location Found");
      }

      return res.status(HttpStatusCode.Ok).json(data.data);
    } catch (error: any) {
      return res
        .status(HttpStatusCode.InternalServerError)
        .json("Something went wrong");
    }
  }
  async getGroupForeCast(req: Request, res: Response) {
    try {
      const { city } = req.body;
      const data = await axios.get(
        `${baseUrl}/forecast/daily?city=${city}&key=${apiKey}`
      );

      if (
        data.status === (HttpStatusCode.BadRequest || HttpStatusCode.NotFound)
      ) {
        return res.status(HttpStatusCode.NotFound).json("No location Found");
      }

      return res.status(HttpStatusCode.Ok).json(data.data);
    } catch (error: any) {
      return res
        .status(HttpStatusCode.InternalServerError)
        .json("Something went wrong");
    }
  }
}

export const weatherController = new WeatherController();

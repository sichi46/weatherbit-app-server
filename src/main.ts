import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";
import weatherRouter from "./weather/route";

const app = express();

const PORT = 7000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (_req: Request, res: Response) => {
  return res.send("API live");
});

app.use("/weather", weatherRouter);

app.listen(PORT, () => {
  console.log("Server is running at http://localhost:" + PORT);
});

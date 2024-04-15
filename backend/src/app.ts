import express, { Request, Response } from "express";
import helmet from "helmet";
import * as dotenv from "dotenv";
import cors from "cors";
import {
  storyLimiter,
  userLimiter,
  globalLimiter,
} from "./middlewares/limiter";

import userRouter from "./routes/userRouter";
import storyRouter from "./routes/storyRouter";
import { auth } from "./middlewares/auth";
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", globalLimiter, userLimiter, userRouter);
app.use("/story", auth, globalLimiter, storyLimiter, storyRouter);
app.get("/", globalLimiter, (req: Request, res: Response) => {
  res.status(200).send("This is the backend server for the app.");
});

app.listen(port, () => console.log(`Server is running on port test ${port}`));

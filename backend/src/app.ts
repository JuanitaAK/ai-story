import express, { Request, Response } from "express";
import helmet from "helmet";
import * as dotenv from "dotenv";
import cors from "cors";
import { corsOptions } from "./middlewares/cors";
import { globalLimiter } from "./middlewares/limiter";

import userRouter from "./routes/userRouter";
import storyRouter from "./routes/storyRouter";
import { auth } from "./middlewares/auth";
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(helmet(), cors(corsOptions), globalLimiter);

app.use("/auth", userRouter);

app.use("/stories", auth, storyRouter);

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("This is the backend server for the app.");
});

app.listen(port, () => {
  const date = new Date().toISOString();
  const mode = process.env.PORT || "development";
  console.log(`[${date}] Server started in ${mode} mode on port ${port}.`);
});

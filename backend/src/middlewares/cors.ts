import * as dotenv from "dotenv";
dotenv.config();

const allowedOrigins: string[] = (
  process.env.ALLOW_CORS_ORIGIN as string
).split(",");

export const corsOptions = {
  origin: allowedOrigins,
  optionsSuccessStatus: 200,
};

import { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosError } from "axios";

const BACKEND_BASE_URL = process.env.BACKEND_BASE_URL as string;
const SIGNIN_API_URL = (BACKEND_BASE_URL + process.env.SIGNIN_API) as string;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const url: string = SIGNIN_API_URL;
  if (req.method === "POST") {
    try {
      const response = await axios.post(url, req.body);
      response.headers["set-cookie"] &&
        res.setHeader("Set-Cookie", response.headers["set-cookie"]);
      res.status(200).json(response.data);
    } catch (error) {
      // if (error instanceof AxiosError) {
      //   res
      //     .status(error.status || 500)
      //     .json({ error: "Internal Server Error" });
      // }

      if (axios.isAxiosError(error)) {
        const status = error.response?.status || 500;
        if (status === 401) {
          res
            .status(401)
            .json({ message: "Unauthorized access. Redirecting to homepage." });
        } else {
          res
            .status(status)
            .json({ error: error.message || "Internal Server Error" });
        }
      } else {
        res.status(500).json({ error: "Internal Server Error" });
      }
    }
  }
};

export default handler;

import { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosError } from "axios";
const BACKEND_BASE_URL = process.env.BACKEND_BASE_URL as string;
const SIGNUP_API_URL = (BACKEND_BASE_URL + process.env.SIGNUP_API) as string;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const response = await axios.post(SIGNUP_API_URL, req.body);
      res.status(200).json(response.data);
    } catch (error) {
      if (error instanceof AxiosError) {
        res
          .status(error.status || 500)
          .json({ error: "Internal Server Error" });
      }
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

export default handler;

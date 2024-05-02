import { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosError } from "axios";
const BACKEND_BASE_URL = process.env.BACKEND_BASE_URL as string;
const FORGOT_PASSWORD_API = (BACKEND_BASE_URL +
  process.env.FORGOT_PASSWORD_API) as string;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const response = await axios.post(FORGOT_PASSWORD_API, req.body);
      res.status(200).json(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status || 500;
        const message = error.response?.data || "Internal Server Error";
        res.status(status).json({ error: message });
      }
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

export default handler;

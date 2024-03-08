import { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosError } from "axios";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const response = await axios.post(
        "http://localhost:5000/auth/login",
        req.body
      );
      response.headers["set-cookie"] &&
        res.setHeader("Set-Cookie", response.headers["set-cookie"]);
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

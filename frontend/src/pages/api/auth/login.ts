import { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosError } from "axios";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const url: string = process.env.SIGNIN_USER as string;
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

import { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosError } from "axios";

const BACKEND_BASE_URL = process.env.BACKEND_BASE_URL as string;
const STORIES_API_URL = (BACKEND_BASE_URL + process.env.STORIES_API) as string;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const AuthToken = req.cookies["Auth-Token"];
      const response = await axios.post(STORIES_API_URL, req.body, {
        headers: { Authorization: `Bearer ${AuthToken}` },
      });
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

  if (req.method === "GET") {
    try {
      const AuthToken = req.cookies["Auth-Token"];
      const id = req.body.id_story;
      const url = `${STORIES_API_URL}/${id}`;

      const response = await axios.get(url, {
        headers: { Authorization: `Bearer ${AuthToken}` },
      });
      res.status(200).json(response.data);
    } catch (error) {
      console.log("Error:", error);
      if (error instanceof AxiosError) {
        res
          .status(error.status || 500)
          .json({ error: "Internal Server Error" });
      }
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  if (req.method === "PATCH") {
    try {
      const AuthToken = req.cookies["Auth-Token"];
      const id = req.body.id_story;
      const url = `${STORIES_API_URL}/${id}`;

      const response = await axios.patch(url, req.body, {
        headers: { Authorization: `Bearer ${AuthToken}` },
      });
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

  if (req.method === "DELETE") {
    try {
      const AuthToken = req.cookies["Auth-Token"];
      const id = req.body.id_story;
      const url = `${STORIES_API_URL}/${id}`;
      console.log("Deleting Story:", url);
      const response = await axios.delete(url, {
        headers: { Authorization: `Bearer ${AuthToken}` },
      });
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

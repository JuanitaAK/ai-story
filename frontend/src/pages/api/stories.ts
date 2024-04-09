import { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosError } from "axios";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const AuthToken = req.cookies["Auth-Token"];
      const url = process.env.STORY_FORM;
      const response = await axios.post(url as string, req.body, {
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

  if (req.method === "PATCH") {
    try {
      const AuthToken = req.cookies["Auth-Token"];
      const baseUrl = process.env.STORY_TITLE;
      const id = req.body.id_story;
      const url = new URL(id, baseUrl).toString();

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
      const baseUrl = process.env.STORY_DELETE;
      const id = req.body.id_story;
      const url = new URL(id, baseUrl).toString();
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

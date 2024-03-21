import express from "express";
import { postStoryForm } from "../controllers/storiesFormControllers";

const router = express.Router();

router.post("/", postStoryForm);

export default router;

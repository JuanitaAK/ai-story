import express from "express";
import * as StoriesControllers from "../controllers/storiesController";

const router = express.Router();

//get all stories
router.get("/", StoriesControllers.getStories);

//delete story
router.delete("/:id", StoriesControllers.deletingStory);

export default router;

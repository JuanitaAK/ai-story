import express from "express";
import * as StoriesControllers from "../controllers/storiesController";
import { postStoryForm } from "../controllers/storiesFormControllers";
import { storyLimiter } from "../middlewares/limiter";

const router = express.Router();

// get last story
router.get("/latest", StoriesControllers.getLatestStory);

// get one story
router.get("/:id", StoriesControllers.getStory);

//delete story
router.delete("/:id", StoriesControllers.deletingStory);

//patch story
router.patch("/:id", StoriesControllers.patchingStory);

//post story-form
router.post("/", storyLimiter, postStoryForm);

//get all stories
router.get("/", StoriesControllers.getStories);

export default router;

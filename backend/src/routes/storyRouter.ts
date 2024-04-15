import express from "express";
import * as StoriesControllers from "../controllers/storiesController";
import { postStoryForm } from "../controllers/storiesFormControllers";

const router = express.Router();

// get one story
router.get("/", StoriesControllers.getStory);

//delete story
router.delete("/:id", StoriesControllers.deletingStory);

//patch story
router.patch("/:id", StoriesControllers.patchingStory);

//post story-form
router.post("/form", postStoryForm);

//get all stories
router.get("/all", StoriesControllers.getStories);

export default router;

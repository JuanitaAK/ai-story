import express from "express";
import * as StoriesControllers from "../controllers/storiesController";

const router = express.Router();

// get one story
router.get("/", StoriesControllers.getStory);

//delete story
router.delete("/:id", StoriesControllers.deletingStory);

//patch story
router.patch("/:id", StoriesControllers.patchingStory);

export default router;

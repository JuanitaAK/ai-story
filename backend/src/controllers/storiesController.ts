import { Request, Response } from "express";
import { data } from "../public/data";
import {
  getAllStories,
  newStory,
  deleteStory,
  updateStory,
  getStoryById,
} from "../models/storyModel";

export const getStories = async (req: Request, res: Response) => {
  const user_id = req.body.userId;
  const allStories = await getAllStories(user_id);
  res.status(200).json(allStories);
};

//GET LATEST STORY ADDED
export const getLatestStory = async (req: Request, res: Response) => {
  const user_id = req.body.userId;
  const latestStory = await newStory(user_id);
  if (!latestStory) {
    res.status(404).json("Story not found");
  } else {
    res.status(200).json(latestStory);
  }
};

export const getStory = async (req: Request, res: Response) => {
  const storyId = req.params.id;
  console.log(`Attempting to get story with ID: ${storyId}`);

  const story = await getStoryById(storyId);
  if (!story) {
    res.status(404).json("Story not found");
  } else {
    res.status(200).json(story);
  }
};
//DELETE STORY
export const deletingStory = async (req: Request, res: Response) => {
  const storyId = req.params.id;
  console.log(`Attempting to delete story with ID: ${storyId}`);
  try {
    const deletedStory = await deleteStory(storyId);
    if (!deletedStory) {
      res.status(404).json({ message: "Story not found in DB", id: storyId });
    }
    res.status(204).send();
  } catch (error) {
    console.error(`Failed to delete the ${storyId} story:`, error);
    res
      .status(500)
      .json({ error: "Failed to delete the story. Please try again later." });
  }
};

export const patchingStory = async (req: Request, res: Response) => {
  const storyId = req.body.id_story;
  const newTitle = req.body.title;
  console.log(`Attempting to change story title with ID: ${storyId}`, newTitle);
  try {
    const updateTitle = await updateStory(storyId, newTitle);
    if (!updateStory) {
      res.status(404).json({ message: "Story not found in DB", id: storyId });
    }
    res.status(204).send();
  } catch (error) {
    console.error(`Failed to update the ${storyId} story:`, error);
    res
      .status(500)
      .json({ error: "Failed to update the story. Please try again later." });
  }
};

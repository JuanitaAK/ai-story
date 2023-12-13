import e from "express";
import { StoryFormData } from "../components/StoryForm";
import { Story } from "@/pages/stories";

export const createStory = async (story: StoryFormData) => {
  const response = await fetch(
    process.env.STORY_FORM || "http://localhost:5000/story-form",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(story),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to create story... 😬 please try again later");
  }

  return response.json();
};

export const getStories = async () => {
  try {
    const response = await fetch(
      process.env.STORY_FORM || "http://localhost:5000/story-form"
    );

    if (!response.ok) {
      throw new Error("Failed to load stories... 😬 please try again later");
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    // You might want to handle the error in some way here
  }
};

import { StoryFormData } from "../components/StoryForm";

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

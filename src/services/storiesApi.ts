import { StoryFormData } from "../components/StoryForm";

export const createStory = async (story: StoryFormData) => {
  console.log("Creating Story:", story);
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

export const deleteStory = async (id: string) => {
  console.log("Trying to Deleting Story:", id);
  try {
    const baseUrl = process.env.STORY_DELETE || `http://localhost:5000/story/`;
    const url = new URL(id, baseUrl).toString();
    console.log("Deleting Story:", url);

    const response = await fetch(url, {
      method: "DELETE",
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(
        `Failed to delete the story with ID ${id}. Server responded with ${
          response.status
        }: ${errorResponse.error || "Unknown error"}`
      );
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
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
    throw err;
  }
};

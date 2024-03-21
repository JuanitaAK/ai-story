import { Story } from "@/components/pages/Stories/StoriesContainer";
import { StoryFormData } from "../components/organismes/StoryForm";
import axios from "axios";

export const createStory = async (story: StoryFormData) => {
  const response = await fetch("/api/stories", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(story),
  });

  if (!response.ok) {
    throw new Error("Failed to create story... 😬 please try again later");
  }

  return response.json();
};

export const deleteStory = async (id: string) => {
  try {
    const response = await fetch("api/stories", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id_story: id }),
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

export const patchTitle = async (story: Story) => {
  try {
    const response = await fetch("api/stories", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(story),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(
        `Failed to add title to the story with ID ${
          story.id_story
        }. Server responded with ${response.status}: ${
          errorResponse.error || "Unknown error"
        }`
      );
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const deleteAuthToken = async (): Promise<void> => {
  try {
    const response = await axios({
      method: "post", // Assuming logout is a POST request; adjust if necessary
      url: "http://localhost:5000/auth/logout",
      withCredentials: true, // This is important for including cookies in the request
    });
    console.log(response.data); // Handle the response data as needed
  } catch (error) {
    console.error("Logout failed", error);
  }
};

import Link from "next/link";
import { AddTitle } from "./AddTitle";
import { StoryCard } from "./storiesCard/StoryCard";
import { useRouter } from "next/router";
import { useState } from "react";
import { Story } from "./StoriesContainer";
import { deleteStory } from "./../services/storiesApi";
import { NoStoryCard } from "./storiesCard/NoStoryCard";

const OneStoriesContainer = ({ story }: { story: Story }): JSX.Element => {
  const [error, setError] = useState<string | null>(null);
  const [addTitleOpen, setAddTitleOpen] = useState(false);

  const router = useRouter();

  const handleClickDelete = async (id_story: string) => {
    try {
      await deleteStory(id_story);
      await router.push(`/form`);
    } catch (error) {
      console.error("Failed to delete your story:", error);
      setError("Failed to delete your story!");
    }
    if (error) {
      return (
        <div className="story">
          <h3 className="mb-2 text-3xl font-medium leading-tight text-neutral-800 m-5 p-5">
            Failed to delete your story! {error}
          </h3>
        </div>
      );
    }
  };

  if (!story) {
    return (
      <div className="story">
        <NoStoryCard />
      </div>
    );
  }

  return (
    <div className="story">
      <h3 className="mb-2 text-3xl font-medium leading-tight text-nav-font m-5">
        Story Created
      </h3>
      <div className="story__container whitespace-pre-line">
        <StoryCard {...story} />
      </div>

      <div className="buttons_container flex gap-5 mx-5 mb-8">
        <button
          type="submit"
          className="self-end w-48 py-2 text-white rounded-md bg-button hover:bg-hover transition duration-300"
          onClick={() => {
            setAddTitleOpen(!addTitleOpen);
          }}
        >
          Save New Story
        </button>

        <button
          type="submit"
          className="self-end w-48 py-2 text-white rounded-md bg-button hover:bg-hover transition duration-300"
          onClick={() => {
            handleClickDelete(story.id_story);
          }}
        >
          Do not save
        </button>
      </div>

      <div id="addTitle">{addTitleOpen && <AddTitle story={story} />}</div>
    </div>
  );
};

export default OneStoriesContainer;

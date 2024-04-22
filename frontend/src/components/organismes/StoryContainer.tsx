import Link from "next/link";
import { AddTitle } from "./AddTitle";
import { StoryCard } from "./storiesCard/StoryCard";
import { useRouter } from "next/router";
import { useState } from "react";
import { Story } from "../pages/Stories/StoriesContainer";
import { deleteStory } from "../../services/storiesApi";
import { NoStoryCard } from "./storiesCard/NoStoryCard";

const StoryContainer = ({ story }: { story: Story }): JSX.Element => {
  const [addTitleOpen, setAddTitleOpen] = useState(false);

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
        {story.title}
      </h3>
      <div className="story__container whitespace-pre-line">{story.story}</div>

      <div className="buttons_container flex gap-5 mx-5 mb-8">
        <button
          type="submit"
          className="self-end w-48 py-2 text-white rounded-md bg-button hover:bg-hover transition duration-300"
          onClick={() => {
            setAddTitleOpen(!addTitleOpen);
          }}
        >
          Update Title
        </button>
      </div>
      <div id="addTitle">{addTitleOpen && <AddTitle story={story} />}</div>
    </div>
  );
};

export default StoryContainer;

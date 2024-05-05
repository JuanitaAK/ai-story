import { AddTitle } from "./AddTitle";
import {  useState } from "react";
import { Story } from "../pages/Stories/StoriesContainer";
import { NoStoryCard } from "./storiesCard/NoStoryCard";
import Link from "next/link";

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
    <div className="story max-w-max block rounded-lg bg-white shadow-xl m-5 mb-8 p-5">
      <h3 className="mb-6 text-3xl font-bold leading-tight text-nav-font">
        {story.title}
      </h3>
      <p className="story__container whitespace-pre-line text-blue-800">
        {story.story}
      </p>

      <div className="buttons_container flex flex-col md:flex-row gap-5 mx-5 my-6">
        <button
          type="submit"
          className="self-end w-48 py-2 text-white text rounded-md bg-button hover:bg-hover transition duration-300"
          onClick={() => {
            setAddTitleOpen(!addTitleOpen);
          }}
        >
          Update Title
        </button>
        <Link
          href='/stories'
          className="self-center w-48 py-2 text-center text-white rounded-md bg-button hover:bg-hover  transition duration-300"
          >
          Close
        </Link>
      </div>
      <div id="addTitle">{addTitleOpen && <AddTitle story={story} />}</div>
    </div>
  );
};

export default StoryContainer;

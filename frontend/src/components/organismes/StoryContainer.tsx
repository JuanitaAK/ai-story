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
    <div className="story max-w-max block rounded-lg bg-white shadow-xl m-5 mb-8 p-3">
      <h3 className="mb-6 text-3xl text-center font-bold leading-tight text-nav-font">
        {story.title}
      </h3>
      <p className="story__container whitespace-pre-line text-blue-800">
        {story.story}
      </p>

      <div className="buttons_container flex flex-col md:self-end w-full md:flex-row gap-5 my-6 p-3">
        <button
          type="submit"
          className=" text-white md:w-48 text-center p-2 rounded-md bg-button hover:bg-hover transition duration-300"
          onClick={() => {
            setAddTitleOpen(!addTitleOpen);
          }}
        >
          Update Title
        </button>
        <Link
          href='/stories'
          className="text-center md:w-48 text-white p-2 rounded-md bg-button hover:bg-hover  transition duration-300"
          >
          Close
        </Link>
      </div>
      <div id="addTitle">{addTitleOpen && <AddTitle story={story} />}</div>
    </div>
  );
};

export default StoryContainer;

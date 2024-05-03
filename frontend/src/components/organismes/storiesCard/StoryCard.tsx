import { useState } from "react";
import { Story } from "../../pages/Stories/StoriesContainer";

export const StoryCard = (props: Story): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div
      key={props.id_story}
      className="flex rounded-lg mx-auto bg-white shadow-xl m-5 mb-8 p-5 whitespace-pre-line "
    >
      <h5 className="my-6 pb-3 text-2xl text-center font-extrabold leading-tight text-title">
        {props.title?.toUpperCase()}
      </h5>
      <p
        className={`mb-4 pb-6 text-font ${
          !isExpanded ? "line-clamp-4" : ""
        }`}
      >
        {props.story}
      </p>

      <div className="buttons_container flex justify-end m-4 p-3">
        <button
          onClick={toggleText}
          className="self-end w-48 py-2 text-white rounded-md  bg-button hover:bg-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hover transition duration-300"
        >
      {isExpanded ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

import { useState } from "react";
import { Story } from "../../components/StoriesContainer";

export const StoryCard = (props: Story): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div
      key={props.id_story}
      className="block rounded-lg bg-story shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] m-5 mb-8 p-5"
    >
      <h5 className="my-6 pb-3 text-2xl text-center font-extrabold leading-tight text-title">
        {props.title?.toUpperCase()}
      </h5>
      <p
        className={`mb-4 pb-6 text-base text-blue-800 ${
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

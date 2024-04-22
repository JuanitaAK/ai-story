import { useState } from "react";
import { Story } from "../../pages/Stories/StoriesContainer";
import { useRouter } from "next/router";
import axios from "axios";
import { deleteStory } from "@/services/storiesApi";

export const StoryTitleCard = (props: Story): JSX.Element => {
  const router = useRouter();

  const openStory = () => {
    router.push(`/stories/${props.id_story}`);
  };

  const handleDeleteStory = async () => {
    await deleteStory(props.id_story).then(() => {
      router.reload();
    });
  };

  return (
    <div
      key={props.id_story}
      className="block rounded-lg bg-story shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] m-5 mb-8 p-5"
    >
      <h5 className="my-6 pb-3 text-2xl text-center font-extrabold leading-tight text-title">
        {props.title?.toUpperCase()}
      </h5>
      <p className={`mb-4 pb-6 text-base text-blue-800 line-clamp-1`}>
        {props.story}
      </p>
      <div className="buttons_container flex justify-end m-4 p-3">
        <button
          onClick={openStory}
          className="self-end w-48 py-2 text-white rounded-md  bg-button hover:bg-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hover transition duration-300"
        >
          Open
        </button>
        <button
          onClick={handleDeleteStory}
          className="self-end w-48 py-2 text-white rounded-md  bg-button hover:bg-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hover transition duration-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

import { StoryCard } from "@/components/storiesCard/StoryCard";

import { useEffect, useState } from "react";
import { Story as StoryOne } from "@/pages/stories";

const OneStoriesContainer = () => {
  const [storyOne, setStory] = useState<StoryOne>({} as StoryOne);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          process.env.STORY || "http://localhost:5000/story"
        );
        const data = await response.json();
        setStory(data[0] as StoryOne);
        console.log(storyOne, "here");
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch your st", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="story">
        <h3 className="mb-2 text-3xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 m-5 p-5">
          Loading...
        </h3>
      </div>
    );
  }

  if (!storyOne) {
    return (
      <div className="story">
        <h3 className="mb-2 text-3xl font-medium leading-tight text-neutral-800 m-5 p-5">
          You have no stories at the moment! Go ahead and create one!
        </h3>
      </div>
    );
  }

  return (
    <div className="story">
      <h3 className="mb-2 text-3xl font-medium leading-tight text-neutral-800 m-5">
        Story Created
      </h3>
      <div className="story__container whitespace-pre-line">
        <StoryCard id={storyOne.id} story={storyOne.story} />
      </div>

      <div className="m-5 mb-4 justify-between">
        <button
          type="submit"
          className="bg-story  text-blue-800 p-2 rounded-lg shadow-lg hover:bg-story-light mr-4"
          onClick={() => {
            console.log("clicked");
          }}
        >
          Save New Story
        </button>
        <button
          type="submit"
          className="bg-story text-blue-800 p-2 rounded-lg shadow-lg hover:bg-story-light"
          onClick={() => {
            console.log("clicked");
          }}
        >
          Do not save
        </button>
      </div>
    </div>
  );
};

export default OneStoriesContainer;

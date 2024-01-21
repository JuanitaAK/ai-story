import StoryCard from "@/components/storiesCard/StoryCard";

import { useEffect, useState } from "react";
import { Story } from "@/pages/stories";

const StoriesContainer = () => {
  const [story, setStories] = useState<Story>({ story: "", id: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          process.env.STORIES || "http://localhost:5000/story"
        );
        const data = await response.json();
        setStories(data);
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

  if (!story) {
    return (
      <div className="story">
        <h3 className="mb-2 text-3xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 m-5 p-5">
          You have no stories at the moment! Go ahead and create one!
        </h3>
      </div>
    );
  }

  return (
    <div className="story">
      <h3 className="mb-2 text-3xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 m-5 p-5">
        Stories
      </h3>
      <div className="story__container">
        <StoryCard props={story} />
      </div>
    </div>
  );
};

export default StoriesContainer;

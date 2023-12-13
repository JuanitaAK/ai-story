import StoryCard from "@/components/storiesCard/StoryCard";
//import { stories } from "./../data/data";

import { useEffect, useState } from "react";

export type Story = {
  id: string;
  story: string;
};

const StoriesContainer = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          process.env.STORIES || "http://localhost:5000/stories"
        );
        const data = await response.json();
        setStories(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch stories:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="stories">
        <h3 className="mb-2 text-3xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 m-5 p-5">
          Loading...
        </h3>
      </div>
    );
  }

  if (!stories) {
    return (
      <div className="stories">
        <h3 className="mb-2 text-3xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 m-5 p-5">
          No stories found
        </h3>
      </div>
    );
  }

  return (
    <div className="stories">
      <h3 className="mb-2 text-3xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 m-5 p-5">
        Stories
      </h3>
      <div className="stories__container">
        {stories.map((story: Story) => (
          <StoryCard key={story.id} {...story} />
        ))}
      </div>
    </div>
  );
};

export default StoriesContainer;

import { StoryCard } from "@/components/stories/StoryCard";
import { stories } from "./../data/data";

const Stories = () => {
  return (
    <div className="stories">
      <h3 className="mb-2 text-3xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 m-5 p-5">
        Stories
      </h3>
      <div className="stories__container">
        {stories.map((story) => (
          <StoryCard key={story.id} {...story} />
        ))}
      </div>
    </div>
  );
};

export default Stories;

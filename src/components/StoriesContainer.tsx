import { NoStoryCard } from "./storiesCard/NoStoryCard";
import { StoryCard } from "./storiesCard/StoryCard";

export type Story = {
  id_story: string;
  story?: string;
  user_id?: string;
  created_at?: Date | string;
  title?: string;
};

const StoriesContainer = ({ stories }: { stories: Story[] }) => {
  if (!stories || stories.length === 0) {
    return (
      <div className="stories">
        <NoStoryCard />

        {/* <h3 className="mb-2 text-3xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 m-5 p-5">
          You have no stories at the moment! Go ahead and create one!
        </h3> */}
      </div>
    );
  }
  return (
    <div className="stories">
      <h3 className="mb-2 text-3xl font-bold leading-tight text-nav-font dark:text-neutral-50 m-5">
        Your Stories
      </h3>
      <div className="stories__container whitespace-pre-line">
        {stories.map((story: Story, index) => (
          <StoryCard key={index} {...story} />
        ))}
      </div>
    </div>
  );
};

export default StoriesContainer;

import { NoStoryCard } from "../../organismes/storiesCard/NoStoryCard";
import { StoryCard } from "../../organismes/storiesCard/StoryCard";

export type Story = {
  id_story: string;
  story: string;
  user_id?: string;
  created_at?: Date | string;
  title?: string;
};

const StoriesContainer = ({ stories }: { stories: Story[] }) => {
  if (!stories || stories.length === 0) {
    return (
      <div className="stories">
        <NoStoryCard />
      </div>
    );
  }
  return (
    <div className="stories">
      <h3 className="mb-2 text-3xl font-bold leading-tight text-nav-font m-5">
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

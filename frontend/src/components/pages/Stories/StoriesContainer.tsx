import { NoStoryCard } from "../../organismes/storiesCard/NoStoryCard";
import { StoryTitleCard } from "../../organismes/storiesCard/StoryTitleCard";

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
      <div className="stories flex flex-col justify-center items-center">
        <NoStoryCard />
      </div>
    );
  }
  return (
    <div className="stories">
      <h2 className="text-4xl ml-12 font-bold mt-12 mb-3 text-left leading-tight text-nav-font">
        Your Stories
      </h2>

      <div className="flex-auto stories__container m-3  max-w-fit flex flex-col justify-center items-center whitespace-pre-line">
        {stories.map((story: Story, index) => (
          <StoryTitleCard key={index} {...story} />
        ))}
      </div>
    </div>
  );
};

export default StoriesContainer;

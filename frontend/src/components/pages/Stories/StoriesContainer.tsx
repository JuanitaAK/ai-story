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
    <div className="stories flex flex-col justify-center items-center ">
      <h2 className="flex justify-start items-center md:text-4xl font-bold mt-8 mb-3 leading-tight text-nav-font">
        Stories
      </h2>

      <div className="md:max-w-3xl whitespace-pre-line">
        {stories.map((story: Story, index) => (
          <StoryTitleCard key={index} {...story} />
        ))}
      </div>
    </div>
  );
};

export default StoriesContainer;

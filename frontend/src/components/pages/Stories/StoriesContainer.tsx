import { NoStoryCard } from "../../organismes/storiesCard/NoStoryCard";
import { StoryTitleCard } from "../../organismes/storiesCard/StoryTitleCard";
import girl from "../../../../public/girl_watching.png";
import Image from "next/image";

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
    <div className="stories flex flex-col m-3">
      <div className="flex flex-row md:gap-3">
        <h2 className="md:w-full text-2xl font-bold text-left md:text-4xl mt-8 mb-3 ml-3 md:ml-9 leading-tight text-nav-font">
          Stories
        </h2>
        <Image
          src={girl}
          alt="women watching"
          width="40"
          className="md:hidden z-30"
        />
      </div>

      <div className=" md:grid md:grid-cols-8">
        <div className="md:col-start-1 col-span-5 z-0">
          {stories.map((story: Story, index) => (
            <StoryTitleCard key={index} {...story} />
          ))}
        </div>
        <Image
          src={girl}
          alt="women watching"
          width="300"
          className="invisible sticky top-20 md:visible md:grid md:col-start-6 md:col-span-3 z-30"
        />
      </div>
    </div>
  );
};

export default StoriesContainer;

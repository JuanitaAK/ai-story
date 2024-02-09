import { StoryCard } from "@/components/storiesCard/StoryCard";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { deleteStory } from "@/services/storiesApi";
import { Story } from "@/pages/stories";
import { AddTitle } from "@/components/AddTitle";
import Link from "next/link";

const OneStoriesContainer = (): JSX.Element => {
  const [Story, setStory] = useState<Story>({} as Story);
  const [isLoading, setIsLoading] = useState(true);
  const [showAddTitle, setShowAddTitle] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [addTitleOpen, setAddTitleOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          process.env.STORY || "http://localhost:5000/story"
        );
        const data = await response.json();
        setStory(data[0] as Story);
        console.log(Story, "here");
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch your story", error);
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

  if (!Story) {
    return (
      <div className="story">
        <h3 className="mb-2 text-3xl font-medium leading-tight text-neutral-800 m-5 p-5">
          You have no stories at the moment! Go ahead and create one!
        </h3>
      </div>
    );
  }

  const handleClickSave = async () => {
    try {
      setShowAddTitle(true);
      //await router.push(`/stories`);
    } catch (error) {
      console.error("Failed to save your story:", error);
      return (
        <div className="story">
          <h3 className="mb-2 text-3xl font-medium leading-tight text-neutral-800 m-5 p-5">
            Failed to save your story!
          </h3>
        </div>
      );
    }
  };

  const handleClickDelete = async (id_story: string) => {
    console.log("clicked on Delete ");

    try {
      await deleteStory(id_story);
      await router.push(`/form`);
    } catch (error) {
      console.error("Failed to delete your story:", error);
      setError("Failed to delete your story!");
    }
    if (error) {
      return (
        <div className="story">
          <h3 className="mb-2 text-3xl font-medium leading-tight text-neutral-800 m-5 p-5">
            Failed to delete your story! {error}
          </h3>
        </div>
      );
    }
  };

  return (
    <div className="story">
      <h3 className="mb-2 text-3xl font-medium leading-tight text-nav-font m-5">
        Story Created
      </h3>
      <div className="story__container whitespace-pre-line">
        <StoryCard {...Story} />
      </div>

      <div className="buttons_container flex gap-5  mx-5 mb-8">
        <Link href="#title">
          <button
            type="submit"
            className="self-end w-48 py-2 text-white rounded-md bg-button hover:bg-hover transition duration-300"
            onClick={() => {
              setAddTitleOpen(!addTitleOpen), handleClickSave();
            }}
          >
            Save New Story
          </button>
        </Link>

        <button
          type="submit"
          className="self-end w-48 py-2 text-white rounded-md bg-button hover:bg-hover transition duration-300"
          onClick={() => {
            handleClickDelete(Story.id_story);
          }}
        >
          Do not save
        </button>
      </div>
      <div id="title">
        {addTitleOpen && <AddTitle id_story={Story.id_story} />}
      </div>
    </div>
  );
};

export default OneStoriesContainer;

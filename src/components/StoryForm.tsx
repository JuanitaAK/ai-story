import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { createStory } from "@/services/storiesApi";

export type StoryFormData = {
  language: string;
  main_character_name: string;
  character_age: number;
  favorite_object: string;
  story_location: string;
  favorite_colors: string;
};

const StoryForm: React.FC = () => {
  const router = useRouter();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      language: "",
      main_character_name: "",
      character_age: 0,
      favorite_object: "",
      story_location: "",
      favorite_colors: "",
    },
  });

  const onSubmit = async (data: StoryFormData) => {
    try {
      router.push(`/loading`);
      const story = await createStory(data);
      console.log(data);
      router.push(`/story`);
    } catch (error) {
      console.error(error);
      return (
        <div className="max-w-md mx-auto my-6 p-6 rounded-lg bg-white shadow-lg">
          <p>Something went wrong...🧐 please try again later </p>
        </div>
      );
    }
  };
  const languages = ["English", "French", "Spanish", "Mandarin", "Arabic"];
  const locations = [
    "Forest",
    "Castle",
    "Jungle",
    "City",
    "House",
    "Park",
    "Beach",
    "Space",
    "Desert",
    "Mountains",
  ];

  return (
    <div className=" max-w-md mx-auto  text-font my-6 p-6 rounded-lg bg-white shadow-lg">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <label htmlFor="language" className="block mb-1 ">
            In what language do you like your story?
          </label>
          <select
            {...register("language", { required: true })}
            defaultValue="English"
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            {languages.map((language, index) => (
              <option key={index} value={language}>
                {language}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="main_character_name" className="block mb-1 ">
            What is the main characters name?
          </label>
          <input
            {...register("main_character_name", {
              required: true,
              maxLength: 20,
            })}
            placeholder="Nicolas"
            type="text"
            className="w-full p-2 border rounded focus:ring focus:ring-story"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="character_age" className="block mb-1  ">
            How old is this character?
          </label>
          <input
            {...register("character_age", {
              required: true,
              maxLength: 2,
              min: 1,
              max: 99,
            })}
            placeholder="5"
            className="w-full p-2 border rounded focus:ring focus:ring-story"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="favorite_object" className="block mb-1  ">
            A favorite object?
          </label>
          <input
            {...register("favorite_object", { required: true, maxLength: 20 })}
            placeholder="Pokemon cards"
            type="text"
            className="w-full p-2 border rounded focus:ring focus:ring-story"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="story_location" className="block mb-1  ">
            Where is the story going to take place?
          </label>
          <select
            {...register("story_location", { required: true })}
            defaultValue="Forest"
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            {locations.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="favorite_colors" className="block mb-1  ">
            A favorite color?
          </label>
          <input
            {...register("favorite_colors", { required: true, maxLength: 20 })}
            placeholder="Blue"
            type="text"
            className="w-full p-2 border rounded focus:ring focus:ring-story"
          />
        </div>

        <button
          type="button"
          onClick={handleSubmit(onSubmit)}
          className="w-full py-2 text-white rounded-md bg-button hover:bg-hover transition duration-300"
        >
          Create Story
        </button>
      </form>
    </div>
  );
};

export default StoryForm;

import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { createStory } from "@/services/storiesApi";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export type StoryFormData = {
  language: string;
  main_character_name: string;
  character_age: string;
  favorite_object: string;
  story_location: string;
  favorite_colors: string;
};

const schema = z.object({
  language: z.string().trim().min(1, { message: "This is required" }),
  main_character_name: z.string().min(1, { message: "Required" }).max(20),
  character_age: z.string().min(1, { message: "Required" }).max(2),
  favorite_object: z.string().trim().min(1, { message: "Required" }).max(20),
  story_location: z.string().trim().min(2, { message: "Required" }),
  favorite_colors: z.string().trim().min(1, { message: "Required" }),
});

const StoryForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<StoryFormData>({
    mode: "onSubmit",
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<StoryFormData> = async (
    data: StoryFormData
  ) => {
    console.log(data);
    try {
      router.push(`/loading`);
      await createStory(data);
      await router.push(`/story`);
    } catch (error) {
      setError("root", { message: "Something is missing in your form" });
      if (error instanceof z.ZodError) {
        console.error("Validation Errors:", error.errors);
      } else {
        console.error(error);
      }
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
            In what language would you like your story?
            <select
              id="language"
              {...register("language", { required: true })}
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              {languages.map((language, index) => (
                <option key={index} value={language}>
                  {language}
                </option>
              ))}
              {errors.language && (
                <div className="text-red-500">{errors.language.message}</div>
              )}
            </select>
          </label>
        </div>

        <div className="mb-6">
          <label htmlFor="main_character_name" className="block mb-1 ">
            What is the main characters name?
            <input
              id="main_character_name"
              {...register("main_character_name")}
              placeholder="Toto"
              type="text"
              className="w-full p-2 border rounded focus:ring focus:ring-story"
            />
          </label>
          {errors.main_character_name && (
            <div className="text-red-500">
              {errors.main_character_name.message}
            </div>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="character_age" className="block mb-1  ">
            How old is this character?
            <input
              id="character_age"
              {...register("character_age")}
              className="w-full p-2 border rounded focus:ring focus:ring-story"
              placeholder="3"
              type="number"
            />
          </label>
          {errors.character_age && (
            <div className="text-red-500">{errors.character_age.message}</div>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="favorite_object" className="block mb-1  ">
            A favorite object?
            <input
              id="favorite_object"
              {...register("favorite_object")}
              type="text"
              placeholder="A teddy bear"
              className="w-full p-2 border rounded focus:ring focus:ring-story"
            />
          </label>
          {errors.favorite_object && (
            <div className="text-red-500">{errors.favorite_object.message}</div>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="story_location" className="block mb-1  ">
            Where is the story going to take place?
            <select
              id="story_location"
              {...register("story_location")}
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              {locations.map((location, index) => (
                <option key={index} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </label>
          {errors.story_location && (
            <div className="text-red-500">{errors.story_location.message}</div>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="favorite_colors" className="block mb-1  ">
            A favorite color?
            <input
              id="favorite_colors"
              {...register("favorite_colors")}
              type="text"
              placeholder="Blue"
              className="w-full p-2 border rounded focus:ring focus:ring-story"
            />
          </label>
          {errors.favorite_colors && (
            <div className="text-red-500">{errors.favorite_colors.message}</div>
          )}
        </div>

        <button
          disabled={isSubmitting}
          type="submit"
          className="w-full py-2 text-white rounded-md bg-button hover:bg-hover transition duration-300"
        >
          Create
        </button>
        {errors.root && (
          <div className="text-red-500">{errors.root.message}</div>
        )}
      </form>
    </div>
  );
};

export default StoryForm;

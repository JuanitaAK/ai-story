import { useState } from "react";
import { useRouter } from "next/router";
import { createStory } from "@/services/storiesApi";

export type StoryFormData = {
  language: string;
  main_character_name: string;
  character_age: string;
  favorite_object: string;
  story_location: string;
  favorite_colors: string;
};

const StoryForm: React.FC = () => {
  const router = useRouter();

  const [formData, setFormData] = useState<StoryFormData>({
    language: "",
    main_character_name: "",
    character_age: "",
    favorite_object: "",
    story_location: "",
    favorite_colors: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      router.push(`/loading`);
      const story = await createStory(formData);
      console.log(formData);
      router.push(`/story`);
    } catch (error) {
      return (
        <div className="max-w-md mx-auto my-6 p-6 rounded-lg bg-white shadow-lg">
          <p>Something went wrong...🧐 please try again later </p>
        </div>
      );
    }
  };

  return (
    <div className=" max-w-md mx-auto  text-font my-6 p-6 rounded-lg bg-white shadow-lg">
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="language" className="block mb-1 ">
            In what language do you like your story?
          </label>
          <select
            id="language"
            name="language"
            value={formData.language}
            onChange={handleChange}
            required
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="" disabled>
              Select a language
            </option>
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="Spanish">Spanish</option>
            <option value="Mandarin">Mandarin</option>
            <option value="Arabic">Arabic</option>
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="main_character_name" className="block mb-1 ">
            What is the main characters name?
          </label>
          <input
            placeholder=" Nicolas"
            type="text"
            id="main_character_name"
            name="main_character_name"
            value={formData.main_character_name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded focus:ring focus:ring-story"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="character_age" className="block mb-1  ">
            How old is this character?
          </label>
          <input
            placeholder="6"
            type="text"
            id="character_age"
            name="character_age"
            value={formData.character_age}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded focus:ring focus:ring-story"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="favorite_object" className="block mb-1  ">
            What is his/her favorite object?
          </label>
          <input
            placeholder="Pokemon cards"
            type="text"
            id="favorite_object"
            name="favorite_object"
            value={formData.favorite_object}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded focus:ring focus:ring-story"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="story_location" className="block mb-1  ">
            Where is the story going to take place?
          </label>
          <select
            id="story_location"
            name="story_location"
            value={formData.story_location}
            onChange={handleChange}
            required
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="" disabled>
              Select a location
            </option>
            <option value="forest">Forest</option>
            <option value="castle">Castle</option>
            <option value="jungle">Jungle</option>
            <option value="city">City</option>
            <option value="house">House</option>
            <option value="park">Park</option>
            <option value="other-country">Beach</option>
            <option value="space">Space</option>
            <option value="desert">Desert</option>
            <option value="mountains">Mountains</option>
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="favorite_colors" className="block mb-1  ">
            What is his/her favorite color?
          </label>
          <input
            placeholder="Blue"
            type="text"
            id="favorite_colors"
            name="favorite_colors"
            value={formData.favorite_colors}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded focus:ring focus:ring-story"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 text-white rounded-md bg-button hover:bg-hover transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default StoryForm;

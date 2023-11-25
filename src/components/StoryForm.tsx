import React, { useState } from "react";

const StoryForm: React.FC = () => {
  // State to hold form values
  const [formData, setFormData] = useState({
    mainCharacterName: "",
    characterAge: "",
    favoriteObject: "",
    storyLocation: "",
    favoriteColor: "",
  });

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //see to send to the backend
    console.log(formData);
  };

  return (
    <div className=" max-w-md mx-auto  text-font my-6 p-6 rounded-lg bg-white shadow-lg">
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="mainCharacterName" className="block mb-1 ">
            What is the main character's name?
          </label>
          <input
            placeholder=" Nicolas"
            type="text"
            id="mainCharacterName"
            name="mainCharacterName"
            value={formData.mainCharacterName}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded focus:ring focus:ring-story"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="characterAge" className="block mb-1  ">
            How old is this character?
          </label>
          <input
            placeholder="6"
            type="text"
            id="characterAge"
            name="characterAge"
            value={formData.characterAge}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded focus:ring focus:ring-story"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="favoriteObject" className="block mb-1  ">
            What is his/her favorite object?
          </label>
          <input
            placeholder="Pokemon cards"
            type="text"
            id="favoriteObject"
            name="favoriteObject"
            value={formData.favoriteObject}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded focus:ring focus:ring-story"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="storyLocation" className="block mb-1  ">
            Where is the story to take place?
          </label>
          <select
            id="storyLocation"
            name="storyLocation"
            value={formData.storyLocation}
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
            <option value="other-country">Other Country</option>
            <option value="space">Space</option>
            <option value="desert">Desert</option>
            <option value="mountains">Mountains</option>
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="favoriteColor" className="block mb-1  ">
            What is his/her favorite color?
          </label>
          <input
            placeholder="Blue"
            type="text"
            id="favoriteColor"
            name="favoriteColor"
            value={formData.favoriteColor}
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

import React, { useState } from "react";

const StoryForm: React.FC = () => {
  // State to hold form values
  const [formData, setFormData] = useState({
    mainCharacter: "",
    place: "",
    object: "",
    animal: "",
  });

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can perform any actions with the form data here
    console.log(formData);
  };
  return (
    <div className=" max-w-md mx-auto my-10 block  justify-between  rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <form onSubmit={handleSubmit}>
        <div className="my-2 place-items-center">
          <label
            htmlFor="mainCharacter"
            className="block mb-1 font-semibold text-gray-800"
          >
            Who is the main character ?
          </label>
          <input
            type="text"
            id="mainCharacter"
            name="mainCharacter"
            value={formData.mainCharacter}
            onChange={handleChange}
            required
            className="w-full p-2 my-3 border rounded focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="place"
            className="block mb-1 font-semibold text-gray-800"
          >
            Where is this story happening?
          </label>
          <input
            type="text"
            id="place"
            name="place"
            value={formData.place}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="object"
            className="block mb-1 font-semibold text-gray-800"
          >
            What is the your meal ?
          </label>
          <input
            type="text"
            id="object"
            name="object"
            value={formData.object}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="animal"
            className="block mb-1 font-semibold text-gray-800"
          >
            Your favorite animal ?
          </label>
          <input
            type="text"
            id="animal"
            name="animal"
            value={formData.animal}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded focus:ring focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default StoryForm;

// <div classNameName="shadow m-5 p-10 bg-slate-200 text-slate-950 min-h-full min-w-full ">
//   <h1 classNameName="bg-slate-200 text-slate-950 text-4xl">Story htmlForm</h1>
//   <htmlForm classNameName="flex">
//     <input
//       classNameName="flex items-center"
//       required
//       name="character"
//       placeholder="Hero"
//     />
//     <button>Submit</button>
//   </htmlForm>
// </div>

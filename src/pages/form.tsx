export const StoryForm = () => {
  return (
    <div className="shadow m-5 p-10 bg-slate-200 text-slate-950 min-h-full min-w-full ">
      <h1 className="bg-slate-200 text-slate-950 text-4xl">Story Form</h1>
      <form className="flex">
        <input
          className="flex items-center"
          required
          name="character"
          placeholder="Hero"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default StoryForm;

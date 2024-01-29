import { Story } from "@/pages/stories";

export const StoryCard = (props: Story): JSX.Element => {
  return (
    <div
      key={props.id_story}
      className="block rounded-lg bg-story shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] m-5 mb-8 p-5"
    >
      <h5 className="mb-2 text-xl font-medium leading-tight text-font"></h5>
      <p className="mb-4 text-base text-blue-800">{props.story}</p>
    </div>
  );
};

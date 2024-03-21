import { Story } from "../pages/Stories/StoriesContainer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { deleteStory, patchTitle } from "../../services/storiesApi";

import { z } from "zod";

const schema = z.object({
  title: z.string().trim().min(1, { message: "At list une letter or number" }),
});

type AddTitleProps = {
  story: Story;
};

type TitleForm = { title: string };

export const AddTitle = ({ story }: AddTitleProps): JSX.Element => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<TitleForm>({
    mode: "onSubmit",
    resolver: zodResolver(schema),
  });

  const handleClickDelete = async (id_story: string) => {
    try {
      await deleteStory(id_story);
      await router.push(`/form`);
    } catch (error) {
      console.error("Failed to delete your story:", error);
    }
    if (errors) {
      return (
        <div className="story">
          <h3 className="mb-2 text-3xl font-medium leading-tight text-neutral-800 m-5 p-5">
            Failed to delete your story!
          </h3>
        </div>
      );
    }
  };

  const onSubmit: SubmitHandler<TitleForm> = async (titleForm: TitleForm) => {
    try {
      await patchTitle({ ...story, title: titleForm.title });
      router.push(`/loading`);
      await router.push(`/stories`);
    } catch (error) {
      setError("root", { message: "Something is missing in your form" });
      if (error instanceof z.ZodError) {
        console.error("Validation Errors:", error.errors);
      } else {
        console.error("Unknown error:", error);
      }
    }
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex p-32 justify-center items-center">
      <div className="flex flex-col space-y-4 w-full text-font p-6 m-6 rounded-lg bg-white shadow-lg">
        <h3 className="mb-2 text-3xl self-center font-medium leading-tight text-nav-font">
          What title do you want to give the story ?
        </h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4 p-3 my-6 mx-12"
        >
          <input
            id="title"
            {...register("title")}
            placeholder="My little story"
            type="text"
            className=" w-full p-2 border rounded focus:ring focus:ring-story"
          />
          {errors.title && (
            <div className="text-red-500">{errors.title.message}</div>
          )}
          <div className="buttons_container flex justify-end gap-5  ml-5 mb-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="self-end w-48 py-2 text-white rounded-md bg-button hover:bg-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hover transition duration-300"
            >
              Add Title
            </button>
            <button
              type="submit"
              className="self-end w-48 py-2 text-white rounded-md bg-button hover:bg-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hover transition duration-300"
              onClick={() => handleClickDelete(story.id_story)}
            >
              Delete Story
            </button>
          </div>
        </form>
      </div>
    </div>
    // </div>
  );
};

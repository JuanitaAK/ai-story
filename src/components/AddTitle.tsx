import { Story } from "@/pages/stories";
import { putTitle } from "@/services/storiesApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  title: z.string().trim().min(1, { message: "At list une letter or number" }),
});

export const AddTitle = ({ id_story }: Story): JSX.Element => {
  const [title, setTitle] = useState("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<Story>({
    mode: "onSubmit",
    resolver: zodResolver(schema),
  });

  const onSubmit = async () => {
    console.log("title is going ");
    try {
      router.push(`/loading`);
      setTitle(title);
      await putTitle({ id_story, title });
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
    <div className="flex flex-col space-y-4 text-font p-6 m-3 rounded-lg bg-white shadow-lg">
      <h3 className="mb-2 text-3xl self-center font-medium leading-tight text-neutral-800">
        What title do you want to give the story ?
      </h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4"
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
        <button
          type="submit"
          disabled={isSubmitting}
          className="self-end w-48 py-2 text-white rounded-md bg-button hover:bg-hover transition duration-300"
        >
          Add Title
        </button>
      </form>
    </div>
  );
};

import { connectUser } from "@/services/signInUsperApi";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "./Loader";

export type SignInFormData = {
  user_mail: string;
  user_password: string;
};
const passwordRequirements =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const schema = z.object({
  user_mail: z
    .string()
    .trim()
    .min(3, { message: "Email is required" })
    .email("This is not a valid email."),
  user_password: z
    .string()
    .min(3)
    .refine((data) => passwordRequirements.test(data), {
      message:
        "Password must be at least 8 characters long and contain at least 1 uppercase letter, 1 lowercase letter, and 1 special character.",
    }),
});

export const SignIn = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<SignInFormData>({
    mode: "onSubmit",
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<SignInFormData> = async (
    data: SignInFormData
  ) => {
    console.log(data);
    try {
      <Loader />;
      //router.push(`/loading`);
      await connectUser(data);
      await router.push(`/stories`);
    } catch (error) {
      setError("root", {
        message: "Something is with wrong with your mail or password",
      });
      if (error instanceof z.ZodError) {
        console.error("Validation Errors:", error.errors);
      } else {
        console.error("Other Errors:", error);
      }
    }
  };

  return (
    //<div className="flex content-center justify-center w-full mt-6 p-3">
    <div className="bg-white p-6 m-3  rounded-lg shadow-lg w-full max-w-md ">
      <h2 className="text-3xl font-bold text-font mb-6">Sign In</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4"
      >
        <label
          htmlFor="user_mail"
          className="text-m font-medium text-neutral-700"
        >
          E-mail
        </label>
        <input
          type="email"
          id="user_mail"
          {...register("user_mail")}
          className="w-full p-2 border rounded focus:ring focus:ring-story"
          placeholder="toto@mystory.com"
        />
        {errors.user_mail && (
          <div className="text-red-500">{errors.user_mail.message}</div>
        )}

        <label htmlFor="user_password" className="font-medium text-neutral-700">
          Password
        </label>
        <input
          className="w-full p-2 border rounded focus:ring focus:ring-story"
          type="password"
          id="user_password"
          {...register("user_password")}
          placeholder="********"
        />
        {errors.user_password?.message && (
          <div className="text-red-500">{errors.user_password.message}</div>
        )}

        <button
          disabled={isSubmitting}
          type="submit"
          className="bg-button text-white py-2 rounded-md hover:bg-hover transition duration-300"
        >
          Sign In
        </button>
      </form>

      <p className=" text-neutral-600 mt-4">
        Don not have an account? &nbsp;
        <Link href="/signup" className="text-blue hover:underline">
          Sign Up
        </Link>
      </p>
    </div>
    //</div>
  );
};

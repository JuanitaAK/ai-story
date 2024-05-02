import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";

export type ForgotPasswordForm = {
  user_mail: string;
};

const schema = z
  .object({
    user_mail: z.string().trim().min(3).email("This is not a valid email."),
  })
  .refine((data) => data.user_mail, {
    path: ["user_mail"],
    message: "Email is required",
  });

export const ForgotPassword = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<ForgotPasswordForm>({
    mode: "onSubmit",
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<ForgotPasswordForm> = async (
    data: ForgotPasswordForm
  ) => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const resJson = await response.json();
      setIsLoading(false);
      if (response.status === 200) {
        setResult(resJson.message);
        console.log(resJson.message);
      } else {
        setError("user_mail", {
          type: "manual",
          message: resJson.message,
        });
        setResult("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("An unexpected error happened:", error);
    }
  };

  return (
    <div className="flex content-center mt-6 justify-center w-full">
      <div className="w-full max-w-3xl rounded-lg shadow-xl p-8 my-4 mx-4 md:mx-auto">
        <h2 className="text-3xl font-semibold text-center  text-nav-font">
          Forgot your password?
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Enter your email address below and we will send you a link to reset
          your password.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4 items-left mt-6"
        >
          <label
            htmlFor="user_mail"
            className="text-m font-semibold text-neutral-700"
          >
            E-mail
          </label>
          <input
            type="email"
            id="user_mail"
            {...register("user_mail")}
            className="w-full rounded-lg p-2 border focus:ring focus:ring-story"
            placeholder="toto@mystory.com"
          />
          {errors.user_mail && (
            <div className="text-red-500">{errors.user_mail.message}</div>
          )}
          {result && <span className="text-nav-font text-m">{result}</span>}
          <button
            type="submit"
            className="bg-button text-white p-2 mt-3 font-semibold md:max-w-sm rounded-md hover:bg-hover transition duration-300"
            disabled={isSubmitting}
          >
            Reset Password
          </button>
        </form>
        <p className="text-m text-neutral-600 mt-4">
          Remember your credentials ? &nbsp;
          <Link href="/login" className="hover:font-semibold text-nav-font">
            Sign In &nbsp;
          </Link>
        </p>
      </div>
    </div>
  );
};

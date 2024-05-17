import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Loader2 } from "./Loader2";

export type LoginForm = {
  user_mail: string;
  password: string;
};

const schema = z.object({
  user_mail: z
    .string()
    .trim()
    .min(3, { message: "Email is required" })
    .email("This is not a valid email."),
  password: z.string(),
});

export const LoginForm = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<LoginForm>({
    mode: "onSubmit",
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<LoginForm> = async (data: LoginForm) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const resJson = await response.json();

      if (response.status === 429 || response.status === 401) {
        setResponse(resJson.Response);
        setResponse(response.statusText);
      }
      if (response.status === 500 || response.status === 404) {
        setResponse(resJson.Response);
        setResponse(response.statusText);
      }
      if (response.status === 200) {
        await router.push(`/stories`);
      } else {
        setResponse("An unexpected error occurred.");
      }
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
    setIsLoading(false);
  };

  return (
    <div className="bg-white p-6 m-3  rounded-lg shadow-lg w-full max-w-md ">
      {isLoading && (
        <div className="absolute inset-0 bg-white flex justify-center items-center z-50">
          <Loader2 />
        </div>
      )}
      <h2 className="text-3xl font-bold text-nav-font mb-6">Sign In</h2>
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
          className="w-full p-2 border rounded focus:ring"
          placeholder="toto@aistory.com"
        />
        {errors.user_mail && (
          <div className="text-red-500">{errors.user_mail.message}</div>
        )}

        <label htmlFor="user_password" className="font-medium text-neutral-700">
          Password
        </label>
        <input
          className="w-full p-2 border rounded focus:ring focus:ring-hover"
          type="password"
          id="user_password"
          {...register("password")}
          placeholder="********"
        />
        {errors.password?.message && (
          <div className="text-red-500">{errors.root?.message}</div>
        )}
        {response && <span className="text-red-500">{response}</span>}

        <button
          disabled={isSubmitting}
          type="submit"
          className="bg-button text-white py-2 rounded-md hover:bg-hover transition duration-300"
        >
          Sign In
        </button>
      </form>

      <p className=" text-neutral-600 mt-4">
        You do not remember your password ?{" "}
        <Link
          href="/forgot-password"
          className=" hover:font-semibold text-nav-font"
        >
          Change it
        </Link>
      </p>
    </div>
  );
};

import Link from "next/link";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";

export type ResetPasswordForm = {
  user_password: string;
  user_confirmed_password: string;
};

const passwordRequirements =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const schema = z
  .object({
    user_password: z.string().min(8),
    user_confirmed_password: z.string().min(8),
  })
  .refine((data) => passwordRequirements.test(data.user_password), {
    path: ["password"],
    message:
      "Password must be at least 8 characters long and contain at least 1 uppercase letter, 1 lowercase letter, and 1 special character (@, $, !, %, *, ?, &).",
  })
  .refine((data) => data.user_password === data.user_confirmed_password, {
    path: ["password_confirmation"],
    message: "Passwords don't match  ❌",
  });

export const ResetPassword = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState("");
  const router = useRouter();
  const token = router.query.otp;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<ResetPasswordForm>({
    mode: "onSubmit",
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<ResetPasswordForm> = async (
    data: ResetPasswordForm
  ) => {
    try {
      setIsLoading(true);
      const dataAndToken = { token, ...data };
      const response = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataAndToken),
      });
      const resJson = await response.json();

      setIsLoading(false);
      if (response.status === 200) {
        setResult(resJson.message);
        router.push("/stories");
      } else {
        setError("user_password", {
          type: "manual",
          message: resJson.error.message,
        });
      }
    } catch (error) {
      console.error("An unexpected error happened:", error);
    }
  };

  return (
    <div className="flex content-center justify-center w-full">
      <div className="w-full max-w-3xl rounded-lg shadow-xl p-8 my-4 mx-4 md:mx-auto">
        <h2 className="text-3xl font-semibold text-center text-nav-font">
          Reset your password
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Enter your new password below.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4 items-left mt-6"
        >
          <div className="flex my-3 flex-col space-y-3">
            <label
              htmlFor="password"
              className="text-m font-semibold text-gray-600"
            >
              New Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="********"
              {...register("user_password")}
              className="w-full rounded-lg  p-2 border focus:ring focus:ring-story"
            />
            {errors.user_password && (
              <span className="text-red-500 text-m">
                {errors.user_password.message}
              </span>
            )}
          </div>
          <div className="flex my-3 flex-col space-y-3">
            <label
              htmlFor="user_confirmed_password"
              className="text-m font-semibold text-neutral-700"
            >
              Confirm New Password
            </label>
            <input
              type="password"
              id="user_confirmed_password"
              {...register("user_confirmed_password")}
              placeholder="********"
              className="w-full rounded-lg  p-2 border focus:ring focus:ring-story"
            />
            {errors.user_confirmed_password && (
              <span className="text-red-500 text-m">
                {errors.user_confirmed_password.message}
              </span>
            )}
            {result && <span className="text-red-500 text-m">{result}</span>}
          </div>

          <button
            type="submit"
            className="bg-button text-white p-2 mt-3 font-semibold md:max-w-sm rounded-md hover:bg-hover transition duration-300"
            disabled={isSubmitting}
          >
            Reset Password
          </button>
        </form>
        <p className="text-m text-neutral-600 mt-4">
          Know your credentials ? &nbsp;
          <Link href="/login" className="hover:font-semibold text-nav-font">
            Sign In &nbsp;
          </Link>
        </p>
      </div>
    </div>
  );
};

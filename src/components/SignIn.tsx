import { connectUser } from "@/services/signInUsperApi";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export type SignInFormData = {
  user_mail: string;
  user_password: string;
};

const SignIn: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<SignInFormData>({
    user_mail: "",
    user_password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const user = await connectUser(formData);
      router.push("/stories");
    } catch (error) {
      // Handle error here
    }

    console.log(formData);
  };
  return (
    <div className="flex content-center justify-center w-full mt-6 p-3">
      <div className="bg-white p-6 m-3  rounded-lg shadow-lg w-full max-w-md ">
        <h2 className="text-3xl font-bold text-font mb-6">Sign In</h2>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <label
            htmlFor="user_mail"
            className="text-sm font-medium text-neutral-700"
          >
            Email
          </label>
          <input
            type="email"
            id="user_mail"
            name="user_mail"
            value={formData.user_mail}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:ring focus:ring-story"
            placeholder="Your email"
            required
          />

          <label
            htmlFor="user_password"
            className="text-sm font-medium text-neutral-700"
          >
            Password
          </label>
          <input
            type="password"
            id="user_password"
            name="user_password"
            value={formData.user_password}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:ring focus:ring-story"
            placeholder="Your password"
            required
          />

          <button
            type="submit"
            className="bg-button text-white py-2 rounded-md hover:bg-hover transition duration-300"
          >
            Sign In
          </button>
        </form>

        <p className="text-sm text-neutral-600 mt-4">
          Don't have an account?{" "}
          <Link href="/signup" className="text-blue hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;

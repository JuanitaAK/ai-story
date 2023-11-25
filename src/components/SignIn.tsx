import Link from "next/link";

const SignIn = () => {
  return (
    <div className="flex content-center justify-center w-full mt-6 p-3">
      <div className="bg-white p-6 m-3  rounded-lg shadow-lg w-full max-w-md ">
        <h2 className="text-3xl font-bold text-font mb-6">Sign In</h2>

        <form className="flex flex-col space-y-4">
          <label
            htmlFor="email"
            className="text-sm font-medium text-neutral-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="input-field"
            placeholder="Your email"
            required
          />

          <label
            htmlFor="password"
            className="text-sm font-medium text-neutral-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="input-field"
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

// SignUp.tsx

import Link from "next/link";

const SignUp = () => {
  return (
    // <div className="flex flex-col items-center justify-center min-h-screen bg-background">
    <div className="flex content-center justify-center w-full mt-6 p-3">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-font mb-6">Sign Up</h2>

        <form className="flex flex-col space-y-4">
          <div className="flex space-x-4">
            <div className="flex-1">
              <label
                htmlFor="firstName"
                className="text-sm font-medium text-neutral-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="input-field"
                placeholder="Your first name"
                required
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="lastName"
                className="text-sm font-medium text-neutral-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="input-field"
                placeholder="Your last name"
                required
              />
            </div>
          </div>

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
            htmlFor="confirmEmail"
            className="text-sm font-medium text-neutral-700"
          >
            Confirm Email
          </label>
          <input
            type="email"
            id="confirmEmail"
            className="input-field"
            placeholder="Confirm your email"
            required
          />

          <label
            htmlFor="password"
            className="text-sm font-medium text-neutral-700"
          >
            Password (Minimum 8 characters, including at least one uppercase
            letter, one lowercase letter, one number, and one special character)
          </label>
          <input
            type="password"
            id="password"
            className="input-field"
            placeholder="Your password"
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
            title="Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character."
            required
          />
          <label
            htmlFor="confirmPassword"
            className="text-sm font-medium text-neutral-700"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="input-field"
            placeholder="Confirm your password"
            required
          />

          <button
            type="submit"
            className="bg-button text-white py-2 rounded-md hover:bg-hover transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-neutral-600 mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-blue hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

// import Link from "next/link";

// const SignUp = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-background">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-3xl font-bold text-font mb-6">Sign Up</h2>

//         <form className="flex flex-col space-y-4">
//           <label
//             htmlFor="name"
//             className="text-sm font-medium text-neutral-700"
//           >
//             Full Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             className="input-field"
//             placeholder="Your full name"
//             required
//           />

//           <label
//             htmlFor="email"
//             className="text-sm font-medium text-neutral-700"
//           >
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             className="input-field"
//             placeholder="Your email"
//             required
//           />

//           <label
//             htmlFor="password"
//             className="text-sm font-medium text-neutral-700"
//           >
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             className="input-field"
//             placeholder="Your password"
//             required
//           />

//           <button
//             type="submit"
//             className="bg-button text-white py-2 rounded-md hover:bg-hover transition duration-300"
//           >
//             Sign Up
//           </button>
//         </form>

//         <p className="text-sm text-neutral-600 mt-4">
//           Already have an account?{" "}
//           <Link href="/signin" className="text-blue hover:underline">
//             Sign In
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

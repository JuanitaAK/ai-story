import { useState } from "react";
import { createUser } from "@/api/creatUserFormApi";
import Link from "next/link";

export type SignUpFormData = {
  user_name: string;
  user_lastname: string;
  user_mail: string;
  confirmEmail: string;
  user_password: string;
  confirm_user_password: string;
};

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState<SignUpFormData>({
    user_name: "",
    user_lastname: "",
    user_mail: "",
    confirmEmail: "",
    user_password: "",
    confirm_user_password: "",
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

    if (formData.user_mail !== formData.confirmEmail) {
      alert("Emails do not match ❌ ");
      return;
    } else if (formData.user_password !== formData.confirm_user_password) {
      alert("The password do not match ❌");
      return;
    }

    try {
      const newUser = await createUser(formData);
    } catch (error) {
      // Handle error here
    }

    console.log(formData);
  };

  return (
    <div className="flex content-center justify-center w-full mt-6 p-3">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-font mb-6">Sign Up</h2>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div className="flex space-x-4">
            <div className="flex-1">
              <label
                htmlFor="user_name"
                className="text-sm my-3 font-medium text-neutral-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="user_name"
                className="w-full p-2 border rounded focus:ring focus:ring-story"
                placeholder="John"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="user_lastname"
                className="text-sm my-3 font-medium text-neutral-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="user_lastname"
                className="w-full p-2 border rounded focus:ring focus:ring-story"
                placeholder="Doe"
                name="user_lastname"
                value={formData.user_lastname}
                onChange={handleChange}
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
            className="w-full p-2 border rounded focus:ring focus:ring-story"
            placeholder="toto@story.com"
            name="user_mail"
            value={formData.user_mail}
            onChange={handleChange}
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
            className="w-full p-2 border rounded focus:ring focus:ring-story"
            placeholder="toto@story.com"
            name="confirmEmail"
            value={formData.confirmEmail}
            onChange={handleChange}
            required
          />

          <label
            htmlFor="user_password"
            className="text-sm font-medium text-neutral-700"
          >
            Password
            <br />
            It has to have minimum 8 characters, including at least one
            uppercase letter, one lowercase letter, one number, and one special
            character.
          </label>
          <input
            type="password"
            id="user_password"
            className="w-full p-2 border rounded focus:ring focus:ring-story"
            placeholder="Your user_password"
            name="user_password"
            value={formData.user_password}
            onChange={handleChange}
            // pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
            title="The password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character."
            required
          />
          <label
            htmlFor="confirm_user_password"
            className="text-sm font-medium text-neutral-700"
          >
            Confirm user_password
          </label>
          <input
            type="password"
            id="confirm_muser_password"
            className="w-full p-2 border rounded focus:ring focus:ring-story"
            value={formData.confirm_user_password}
            name="confirm_user_password"
            onChange={handleChange}
            placeholder="Confirm your user_password"
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
//             className="w-full p-2 border rounded focus:ring focus:ring-story"
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
//             className="w-full p-2 border rounded focus:ring focus:ring-story"
//             placeholder="Your email"
//             required
//           />

//           <label
//             htmlFor="user_password"
//             className="text-sm font-medium text-neutral-700"
//           >
//             user_password
//           </label>
//           <input
//             type="user_password"
//             id="user_password"
//             className="w-full p-2 border rounded focus:ring focus:ring-story"
//             placeholder="Your user_password"
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

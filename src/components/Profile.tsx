import React from "react";
import avatar from "../../public/fox_6249911.png";
import Image from "next/image";
import { userData } from "./../data/userData";

export type ProfilePageProps = {
  firstName: string;
  lastName: string;
  email: string;
};

const Profile: React.FC<ProfilePageProps> = (data): JSX.Element => {
  const { firstName, lastName, email } = userData;
  return (
    <div className="max-w-md mx-auto my-6 p-6 rounded-lg bg-white shadow-lg">
      <div className="mb-6 text-center">
        <Image
          src={avatar}
          alt="User Avatar"
          className="w-24 h-24 mx-auto rounded-full mb-4"
        />
        <p className="sm:flex space-x-4">
          {/* "text-2xl font-bold"> */}
          {firstName}
          HERE
          {lastName}
        </p>
        <p className="text-gray-500">{email}</p>
      </div>

      {/* Additional user profile information can be added here */}

      <button
        onClick={() => console.log("Logout")} // Replace with actual logout logic
        className="w-full py-2 text-white rounded-md bg-button hover:bg-hover transition duration-300"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;

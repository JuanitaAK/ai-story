import React from "react";
import avatar from "../../../../public/fox_6249911.png";
import Image from "next/image";
import { userData } from "../../../data/userData";
import { deleteAuthToken } from "@/services/storiesApi";
import router from "next/router";

export type ProfilePageProps = {
  firstName: string;
  lastName: string;
  email: string;
};

const Profile: React.FC<ProfilePageProps> = (data): JSX.Element => {
  const { firstName, lastName, email } = userData;
  const handleLogout = async () => {
    try {
      deleteAuthToken();
      await router.push(`/`);
    } catch (error) {
      console.error("Failed to delete your story:", error);
    }
  };

  const name = firstName + " " + lastName;

  return (
    <div className="story flex justify-center items-center h-screen ">
      <div className=" rounded-lg md:max-w-3xl shadow-xl m-12 mb-8 p-7">
        <Image
          src={avatar}
          alt="User Avatar"
          className="w-24 h-24 mx-auto rounded-full mb-4"
        />
        <div className="flex flex-col items-center pb-3 text-2xl ">
          <p>{name} </p>
          <p>{email}</p>
        </div>

        <button
          onClick={handleLogout}
          className="w-full py-2 text-white rounded-md text-lg bg-button hover:bg-hover transition duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;

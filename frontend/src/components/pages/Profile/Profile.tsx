import React from "react";
import avatar from "../../../../public/fox_6249911.png";
import Image from "next/image";
import { userData } from "../../../data/userData";
import { deleteAuthToken } from "@/services/storiesApi";
import router from "next/router";

export type ProfilePageProps = {
  userId: string;
  name: string;
  mail: string;
};

const ProfilePage = ({
  profile,
}: {
  profile: ProfilePageProps;
}): JSX.Element => {
  const handleLogout = async () => {
    try {
      deleteAuthToken();
      await router.push(`/`);
    } catch (error) {
      console.error("Failed to delete your story:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="w-full max-w-4xl rounded-lg shadow-xl p-8 my-4 mx-4 md:mx-auto">
        <Image
          src={avatar}
          alt="User Avatar"
          className="w-24 h-24 mx-auto m-6 mb-4"
        />
        <div className="flex flex-col w-auto items-center pb-3 mx-auto text-2xl ">
          <p>{profile.name}</p>
          <p>{profile.mail}</p>
        </div>
        <button
          onClick={handleLogout}
          className="flex justify-center items-center w-full md:w-1/2 mt-4 mx-auto py-3 px-6 text-white rounded-md text-lg bg-button hover:bg-hover transition duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;

import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import avatar from "../../public/fox_6249911.png";
import { deleteAuthToken } from "@/services/storiesApi";

export type ProfileExpanderProps = {
  userData: {
    firstName: string;
    lastName: string;
    email: string;

    isLoggedIn: boolean;
  };
};

export const ProfileExpander: React.FC<ProfileExpanderProps> = ({
  userData,
}): JSX.Element => {
  const router = useRouter();

  const handleLogout = async () => {
    deleteAuthToken();

    try {
      await router.push(`/`);
    } catch (error) {
      console.error("Failed to delete your story:", error);
    }
  };

  const handlelProfile = () => {
    router.push("/profile");
  };

  return (
    <div className=" z-0 absolute top-14 right-4 bg-white border rounded-md shadow-lg hover:text-hove text-2xl">
      {userData.isLoggedIn ? (
        <>
          <div>
            <Image
              src={avatar}
              alt="User Avatar"
              className="w-12 h-12 rounded-full"
            />
          </div>
          <div>
            <p>{`${userData.firstName} ${userData.lastName}`}</p>
            <p>{userData.email}</p>
          </div>
          <div>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </>
      ) : (
        <div className="flex flex-col absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-50">
          <button
            onClick={handlelProfile}
            className="hover:bg-hover hover:text-white rounded-md px-3 py-2"
          >
            Profile
          </button>
          <button
            onClick={handleLogout}
            className="hover:bg-hover hover:text-white rounded-md px-3 py-2"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

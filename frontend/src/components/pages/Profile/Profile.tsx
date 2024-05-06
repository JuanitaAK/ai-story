import React, { useState } from "react";
import avatar from "../../../../public/fox_6249911.png";
import Image from "next/image";
import router from "next/router";
import Cookies from "js-cookie";

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
  const [isLogged, setIsLogged] = useState(false);

  const handleLogout = () => {
    try {
      Cookies.remove("Auth-Token");
      setIsLogged(false);
      router.replace(`/`);
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };

  return (
    <div className="flex items-center justify-center m-3">
      <div className="w-full md:max-w-screen-md rounded-lg shadow-xl p-3 my-4">
        <Image
          src={avatar}
          alt="User Avatar"
          className="w-24 h-24 mx-auto m-6"
        />
        <div className="flex flex-col w-auto items-center gap-3 text-font mx-auto ">
          <p>{profile.name}</p>
          <p>{profile.mail}</p>
      
        <button
          onClick={handleLogout}
          className="w-full md:w-52 py-2 text-xl text-white rounded-md  bg-button hover:bg-hover focus:ring-hover transition duration-300"
        >
          Logout
        </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

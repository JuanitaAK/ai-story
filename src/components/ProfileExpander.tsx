import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import avatar from "../../public/fox_6249911.png";

export type ProfileExpanderProps = {
  userData: {
    firstName: string;
    lastName: string;
    email: string;

    isLoggedIn: boolean;
  };
};

const ProfileExpander: React.FC<ProfileExpanderProps> = ({
  userData,
}): JSX.Element => {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/");
    // Perform logout actions
  };

  const handleLogin = () => {
    router.push("/profile");
  };

  return (
    <div className="absolute top-16 right-4 bg-white p-4 border rounded-md shadow-lg">
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
        <button onClick={handleLogin}> Please login </button>
      )}
    </div>
  );
};

export default ProfileExpander;

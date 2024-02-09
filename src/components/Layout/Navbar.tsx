import Image from "next/image";
import Link from "next/link";
import { ProfileExpander } from "../ProfileExpander";
import StoryForm from "../../pages/form";
import { useState } from "react";
import logo from "../../../public/logo.png";

// Mock user data for demonstration purposes
const userData = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  avatar: "https://example.com/avatar.jpg",
  isLoggedIn: false, // Set this to true if the user is logged in
};

const Navbar = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 md:px-10 lg:px-24 xl:px-32 flex items-center justify-between bg-navbar text-text-gray-200 shadow-lg hover:text-hove text-2xl ">
      <Image className="w-20 h-20 rounded-full" src={logo} alt="Story.com" />

      <div
        className={`sm:flex sm:items-center ${menuOpen ? "flex" : "hidden"}`}
      >
        <div className="sm:flex space-x-4 text-nav-font font-semibold text-lg ">
          <Link
            href="/stories"
            className="hover:bg-hover hover:text-white rounded-md px-3 py-2"
          >
            Stories
          </Link>
          <Link
            href="/form"
            className="hover:bg-hover hover:text-white rounded-md px-3 py-2 "
          >
            New Story
          </Link>
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="hover:bg-hover hover:text-white rounded-md px-3 py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {/* <a href="https://fr.freepik.com/search?format=search&last_filter=query&last_value=avatar+fox&query=avatar+fox&type=icon">Icône de Freepik</a> */}
          </button>
        </div>
      </div>

      <div className="sm:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl text-neutral-500 focus:outline-none"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>
      {profileOpen && <ProfileExpander userData={userData} />}
    </nav>
  );
};

export default Navbar;

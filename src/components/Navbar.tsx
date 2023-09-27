import StoryForm from "../pages/form";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = (): JSX.Element => {
  return (
    <nav className="relative p-8 flex flex-wrap items-center justify-between  bg-neutral-100  text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-2">
      <div className="m-2 pr-5">
        <Image
          width={60}
          height={60}
          src="https://img.icons8.com/stickers/200/european-dragon.png"
          alt="Dragon Logo"
        />
        {/* <p>MyStories.com</p> */}
      </div>
      <div className="hidden sm:ml-6 sm:block">
        <div className="flex space-x-4 pr-(">
          <Link
            href="/stories"
            className="hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-xl font-medium"
            aria-current="page"
          >
            My stories
          </Link>
          <Link
            href="/form"
            className=" hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-xl font-medium"
          >
            Do a New Story
          </Link>
          <Link
            href="/about"
            className=" hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-xl font-medium"
          >
            About us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

//

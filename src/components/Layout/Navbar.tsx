import StoryForm from "../../pages/form";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 p-4 md:p-4 flex items-center justify-between bg-navbar text-text-gray-200 shadow-lg hover:text-hove">
      <div className=" mx-6">
        <Image
          width={60}
          height={60}
          src="https://img.icons8.com/stickers/200/european-dragon.png"
          alt="Dragon Logo"
        />
      </div>

      <div
        className={`sm:flex sm:items-center ${menuOpen ? "flex" : "hidden"}`}
      >
        <div className="sm:flex space-x-4">
          <Link
            href="/stories"
            className="hover:bg-hover hover:text-white rounded-md px-3 py-2 text-xl font-medium"
          >
            Stories
          </Link>
          <Link
            href="/form"
            className="hover:bg-hover hover:text-white rounded-md px-3 py-2 text-xl font-medium"
          >
            New Story
          </Link>
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
    </nav>
  );
};

export default Navbar;

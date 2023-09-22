import StoryForm from "../pages/form";
import Image from "next/image";
import Link from "next/link";
const Navbar = (): JSX.Element => {
  return (
    <nav className="bg-blue-500 mx-0 flex justify-left items-center p-5">
      <div>
        <Image
          width={50}
          height={50}
          src="https://img.icons8.com/stickers/200/european-dragon.png"
          alt="Dragon Logo"
        />
        <p>MyStories.com</p>
      </div>
      <div className="hidden sm:ml-6 sm:block">
        <div className="flex space-x-4">
          <Link
            href="/my-stories"
            className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-xl font-medium"
            aria-current="page"
          >
            My stories
          </Link>
          <Link
            href="/form"
            className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-xl font-medium"
          >
            Do a New Story
          </Link>
          <Link
            href="/about"
            className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-xl font-medium"
          >
            About us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

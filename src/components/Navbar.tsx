import Image from "next/image";
import Link from "next/link";

const NavBar = (): any => {
  return (
    <section className="bg-white shadow p-5">
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
          <Image
            width={50}
            height={50}
            src="https://img.icons8.com/stickers/200/european-dragon.png"
            alt="Dragon Logo"
          />
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            {/* < />!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <Link
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              aria-current="page"
            >
              My stories
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
            >
              Do a New Story
            </Link>
            <Link
              href="/about"
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
            >
              About us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;

import Link from "next/link";

const Footer = (): JSX.Element => {
  const year = new Date().getFullYear();
  return (
    <div className="flex flex-col md:justify-center pt-3 items-end gap-4 md:pr-20 bg-bgFooter shadow-lg text-xl font-bold text-white  sm:mb-0 ">
      <div>
        <Link
          href="/about"
          className="hover:text-nav-hover font-semibold  rounded-md py-2  mb-2 mr-4"
        >
          About AI Story
        </Link>
        <Link
          href="/contact"
          className="hover:text-nav-hover font-semibold rounded-md  py-2 mb-2 mr-4"
        >
          Contact
        </Link>
      </div>
      <span className="text-xs flex font-thin flex-col mr-2 mb-5">
        Created by JuanitaAK with Next.js, and Tailwind. &copy; {year} All
        Rights Reserved
      </span>
    </div>
  );
};

export default Footer;

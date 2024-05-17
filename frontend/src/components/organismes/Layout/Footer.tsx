import Link from "next/link";

const Footer = (): JSX.Element => {
  const year = new Date().getFullYear();
  return (
    <div className="flex flex-col pt-3 md:items-end items-center gap-4 md:pr-20 bg-bgFooter shadow-lg text-xl text-white sm:mb-0">
      <div className="flex md:gap-6 gap-3 md:text-2xl ">
        <Link
          href="/about"
          className="hover:text-nav-hover font-semibold rounded-md"
        >
          About AI Story
        </Link>
        <Link
          href="/contact"
          className="hover:text-nav-hover font-semibold rounded-md"
        >
          {/* Contact */}
        </Link>
      </div>
      <span className="text-xs flex font-thin flex-col md:text-right text-center mx-2 mb-5">
        Created by JuanitaAK with Next.js, and Tailwind.
        <br />
        &copy; {year} All Rights Reserved.
      </span>
    </div>
  );
};

export default Footer;

import Link from "next/link";

const Footer = (): JSX.Element => {
  return (
    <div className="flex sm:justify-end justify-center items-center gap-4 pr-20 bg-bgFooter shadow-lg text-xl font-bold text-white  sm:mb-0 ">
      <Link
        href="/about"
        className="hover:text-nav-hover  rounded-md py-2 font-medium mb-2 mr-4"
      >
        About AI Story
      </Link>
      <Link
        href="/contact"
        className="hover:text-nav-hover  rounded-md  py-2 font-medium mb-2 mr-4"
      >
        Contact
      </Link>
    </div>
  );
};

export default Footer;

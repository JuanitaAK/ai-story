import Link from "next/link";

const Footer = (): JSX.Element => {
  return (
    <div className="flex sm:justify-end justify-center items-center gap-4 py-3 px-5 pr-20 bg-bgFooter shadow-lg text-2xl text-gray-200  sm:mb-0 ">
      <Link
        href="/about"
        className="hover:bg-hover hover:text-white rounded-md py-2 font-medium mb-2 mr-4"
      >
        About Story.com
      </Link>
      <Link
        href="/contact"
        className="hover:bg-hover hover:text-white rounded-md  py-2 font-medium mb-2  mr-4"
      >
        Contact
      </Link>
    </div>
  );
};

export default Footer;

import Link from "next/link";

const Footer = (): JSX.Element => {
  return (
    <div className="flex sm:justify-end justify-center py-3 px-3 bg-bgFooter shadow-lg text-gray-200 lg:px-24 xl:px-32">
      <Link
        href="/about"
        className="hover:bg-hover hover:text-white rounded-md py-2 text-base sm:text-xl font-medium mb-2 sm:mb-0 mr-4"
      >
        About Story.com
      </Link>
      <Link
        href="/contact"
        className="hover:bg-hover hover:text-white rounded-md  py-2 text-base sm:text-xl font-medium mb-2 sm:mb-0 mr-4"
      >
        Contact
      </Link>
    </div>
  );
};

export default Footer;

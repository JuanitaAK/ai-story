import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex justify-end align-top px-6 py-3 bg-bgFooter shadow-lg text-gray-200 ">
      <Link
        href="/about"
        className="hover:bg-hover hover:text-white rounded-md px-3 py-2 text-base sm:text-xl font-medium mb-2 sm:mb-0 mr-4"
      >
        About Story.com
      </Link>
      <Link
        href="/contact"
        className="hover:bg-hover hover:text-white rounded-md px-3 py-2 text-base sm:text-xl font-medium"
      >
        Contact
      </Link>
    </div>
  );
};

export default Footer;

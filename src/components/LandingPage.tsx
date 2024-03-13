import Image from "next/image";
import home from "./../../public/home.png";
import Link from "next/link";

const LandingPage = (): JSX.Element => {
  {
    /* className="bg-custom-gradient" */
  }
  return (
    <div>
      {/* // <div className="bg-gradient-to-b from-white to-blue-500"> */}
      <h2 className=" text-center text-3xl lg:text-5xl font-bold text-nav-font m-6 p-3">
        MyStory.com
      </h2>

      <div className="flex flex-col lg:flex-row items-start">
        <Image
          src={home}
          alt="Family reading a book"
          className=" rounded-lg left-6"
        />

        <div className="Card-container m-3 bg-white p-6 rounded-lg shadow-lg bg-opacity-70  max-w-lg  ">
          <p className="text-lg font-medium text-neutral-700">
            MyStory is a platform where you can create explore your creativity
            to create your own stories in a simple way and share it.
          </p>
          <div>
            <div className="buttons_container flex flex-col lg:flex-row gap-5 m-5 ">
              <Link href="/login">
                <button className="self-end w-full sm:w-48 p-2  text-white rounded-md bg-button hover:bg-hover transition duration-300">
                  Login
                </button>
              </Link>

              <Link href="/signup">
                <button className="self-end w-full sm:w-48 p-2 text-white rounded-md bg-button hover:bg-hover transition duration-300">
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default LandingPage;

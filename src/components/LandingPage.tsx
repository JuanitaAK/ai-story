import Image from "next/image";
import home from "./../../public/home.png";
import Link from "next/link";

const LandingPage = (): JSX.Element => {
  return (
    <div>
      <h2 className=" text-center text-3xl lg:text-5xl font-bold text-nav-font pt-6 mb-9">
        MyStory.com
      </h2>

      <div className="flex flex-col lg:flex-row gap-20 items-center mb-6 p-3">
        <Image
          src={home}
          alt="Family reading a book"
          className=" rounded-lg left-6"
          width={700}
        />

        <div className="Card-container lg:mt-12 bg-white p-6 rounded-lg shadow-lg bg-opacity-70 md:max-w-lg lg:w-auto mr-3 ">
          <p className="text-lg lg:text-2xl text-neutral-700">
            MyStory is a platform where you can create explore your creativity
            to create your own stories in a simple way and share it.
          </p>
          <div>
            <div className="buttons_container flex  flex-col lg:flex-row gap-5 m-5 py-5">
              <Link href="/login">
                <button className="self-end w-full lg:w-48 py-2 px-10 lg:text-2xl text-white rounded-md bg-button hover:bg-hover transition duration-300">
                  Login
                </button>
              </Link>

              <Link href="/signup">
                <button className="self-end w-full lg:w-48  py-2 px-7 lg:text-2xl  text-white rounded-md bg-button hover:bg-hover transition duration-300">
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

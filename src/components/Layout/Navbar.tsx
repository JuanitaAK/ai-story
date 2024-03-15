import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.png";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const Navbar = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const router = useRouter();

  //option if httpsOnly
  // const handleLogout = async () => {
  //   try {
  //     deleteAuthToken();
  //     await router.push(`/`);
  //   } catch (error) {
  //     console.error("Failed to logout:", error);
  //   }
  // };

  useEffect(() => {
    console.log(Cookies.get("Auth-Token"));
    if (Cookies.get("Auth-Token")) {
      setIsLogged(true);
    }
  }, [router]);

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target as HTMLElement;
      if (target && !target.closest(".menu-btn")) {
        setIsDropdownOpen(false);
        setIsMenuOpen(false);
      }
    };
  }, []);

  const handleLogout = () => {
    try {
      Cookies.remove("Auth-Token");
      setIsLogged(false);
      router.replace(`/`);
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };

  return (
    <nav className="menu-btn Z-10 w-full sticky top-0 z-50 bg-navbar text-nav-font font-semibold px-5 lg:px-3 shadow-lg hover:text-hove text-2xl">
      <div className="container mx-auto flex justify-between items-center transition duration-300">
        <Link href="/" className="md=ml-3">
          <Image src={logo} alt="Logo Story.com" width={80} height={80} />
        </Link>

        {isLogged && (
          // menu descktop
          <div>
            <div className="hidden md:flex space-x-4">
              <Link
                href="/stories"
                className="hover:bg-hover cursor-pointer hover:text-white transition duration-300 rounded-md p-3  "
                onClick={() => setIsDropdownOpen(false)}
              >
                Stories Desk
              </Link>

              <Link
                href="/form"
                className="hover:bg-hover cursor-pointer hover:text-white transition duration-300 rounded-md p-3 "
                onClick={() => setIsDropdownOpen(false)}
              >
                New Story
              </Link>

              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="block p-3 rounded-md hover:text-white transition duration-300 hover:bg-hover"
                >
                  Account
                </button>
                {isDropdownOpen && (
                  <div className="items-center bg-sky-400 text-white  transition duration-300 absolute right-0 mt-2 w-48 shadow-lg rounded-md  ">
                    {/* desktooopp */}
                    <Link
                      href="/profile"
                      className="block px-4 py-2 rounded-md hover:text-white  hover:hover:bg-sky-800 transition duration-300"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Profile DEsk
                    </Link>
                    <Link
                      href="/"
                      onClick={handleLogout}
                      className="block px-4 py-2 rounded-md hover:text-white hover:hover:bg-sky-800 transition duration-300"
                    >
                      Logout
                    </Link>
                  </div>
                )}
              </div>
            </div>

            <div className=" relative md:hidden block transition duration-300">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="z-50 p-3  text-nav-font"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMenuOpen ? "×" : "☰"}
              </button>
            </div>
          </div>
        )}

        {isMenuOpen && isLogged && (
          // <div className="fixed bg-black flex p-32 justify-center items-center">
          <div className=" fixed md:hidden block right-4 mt-40 w-48 bg-sky-800 shadow-xl rounded-lg">
            <Link
              href="/stories"
              className="block hover:bg-hover hover:text-white rounded-md p-3 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Stories BG
            </Link>
            <Link
              href="/form"
              className=" block hover:bg-hover hover:text-white rounded-md p-3 transition duration-300 "
              onClick={() => setIsMenuOpen(false)}
            >
              New Story
            </Link>
            <Link
              href={""}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="block hover:bg-hover rounded-md hover:text-white p-3 transition duration-300"
            >
              Account
            </Link>

            {isDropdownOpen && (
              <div className=" fixed mt-5justify-center block right-15 rounded-xl bg-sky-400 text-white w-48 shadow-lg transition duration-300">
                <Link
                  href="/profile"
                  className="block px-4 py-2 hover:hover:bg-sky-800  hover:text-white rounded-md transition duration-300"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Profile Bg
                </Link>
                <Link
                  href="/"
                  onClick={handleLogout}
                  className="block  hover:hover:bg-sky-800  hover:text-white rounded-md px-3 py-3 transition duration-300"
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

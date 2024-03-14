import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { deleteAuthToken } from "@/services/storiesApi";
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
    <nav className="Z-10 w-full sticky top-0 z-50 bg-navbar text-nav-font font-semibold px-5 lg:px-3 shadow-lg hover:text-hove text-2xl">
      <div className="container mx-auto flex justify-between items-center ml-6">
        <Link href="/">
          <Image
            className="m-0"
            src={logo}
            alt="Logo Story.com"
            width={80}
            height={80}
          />
        </Link>

        {isLogged && (
          <div>
            <div className="hidden md:flex space-x-4">
              <Link
                href="/stories"
                className="hover:bg-hover hover:text-white rounded-md px-3 "
              >
                Stories
              </Link>

              <Link
                href="/form"
                className="hover:bg-hover hover:text-white rounded-md px-3 "
              >
                New Story
              </Link>

              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="block px-4 rounded-md hover:text-white hover:bg-hover"
                >
                  Accounts
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 py-2 bg-white w-48 shadow-lg">
                    <Link
                      href="/profile"
                      className="block px-4 py-2 rounded-md hover:text-white hover:bg-hover"
                    >
                      Profile
                    </Link>
                    <Link
                      href="/"
                      onClick={handleLogout}
                      className="block px-4 py-2 rounded-md hover:text-white hover:bg-hover"
                    >
                      Logout
                    </Link>
                  </div>
                )}
              </div>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? "×" : "☰"}
              </button>
            </div>
          </div>
        )}

        {isMenuOpen && isLogged && (
          <div className="md:hidden">
            <Link
              href="/stories"
              className="hover:bg-hover hover:text-white rounded-md px-3 py-2"
            >
              Stories
            </Link>
            <Link
              href="/form"
              className="hover:bg-hover hover:text-white rounded-md px-3 py-2 "
            >
              New Story
            </Link>
            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              Account
            </button>
            {isDropdownOpen && (
              <div>
                <Link
                  href="/profile"
                  className="block hover:bg-hover hover:text-white rounded-md px-3 py-2"
                >
                  Profile
                </Link>
                <Link
                  href="/"
                  onClick={handleLogout}
                  className="hover:bg-hover hover:text-white rounded-md px-3 py-2"
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

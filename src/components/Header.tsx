"use client";

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState); // Toggle based on previous state
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <nav>
        <div className="container max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" passHref>
            <p className="flex items-center space-x-3 rtl:space-x-reverse">
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                Annie Booker
              </span>
            </p>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col rtl:space-x-reverse mt-4 md:flex-row md:space-x-8 md:mt-0">
              <li>
                <Link href="/" passHref>
                  <p
                    className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-custom-hover md:p-0"
                    onClick={closeMenu}
                    aria-current="page"
                  >
                    Home{" "}
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/about" passHref>
                  <p
                    className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-custom-hover md:p-0"
                    onClick={closeMenu}
                  >
                    About
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/projects" passHref>
                  <p
                    className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-custom-hover md:p-0"
                    onClick={closeMenu}
                  >
                    Projects
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/contact" passHref>
                  <p
                    className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-custom-hover md:p-0"
                    onClick={closeMenu}
                  >
                    Contact
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

/** @format */

import React, { useState } from "react";
import { Transition } from "@headlessui/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="p-6">
        <div className="max-w-7x2 container mx-auto sm:px-0 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between w-full">
              <div className="flex-shrink-0 items-center">
                <a href="\" className="font-sans text-black text-3xl">
                  Ali Raza
                </a>
              </div>
              <div className="hidden md:block ">
                <div className="ml-10 flex items-baseline space-x-4">
                  <ul className="flex cursor-pointer gap-12 items-center">
                    <li>
                      <a href="\" className="hover:text-white font-thin">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="\" className="hover:text-white font-thin">
                        Contact
                      </a>
                    </li>
                    <li>
                      <a href="\" className="hover:text-white font-thin">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="\" className="hover:text-white font-thin">
                        Support
                      </a>
                    </li>

                    <li>
                      <button className="p-3 bg-black text-white rounded hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-slate-900">
                        Login
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-between p-2 rounded-md hover:text-white hover:bg-gray-800"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6 text-red-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
        >
          <div className="md:hidden" id="mobile-menu">
            <div className="pt-12 pb-3 space-y-1 sm:px-3">
              <ul className="flex flex-col cursor-pointer gap-12">
                <li>
                  <a href="\" className="hover:text-red-600  font-thin">
                    Home
                  </a>
                </li>
                <li>
                  <a href="\" className="hover:text-red-600 font-thin">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="\" className="hover:text-red-600 font-thin">
                    About
                  </a>
                </li>
                <li>
                  <a href="\" className="hover:text-red-600 font-thin">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Transition>
      </nav>
    </div>
  );
};

export default Navbar;

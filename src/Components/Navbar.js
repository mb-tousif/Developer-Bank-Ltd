import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-[#00B160] relative z-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex flex-auto">
          <div className="flex mx-auto my-auto">
            <h1 className="ml-6 text-white px-3 py-2 justify-end rounded-md text-lg md:text-xl font-medium">
              𝕯𝖊𝖛𝖊𝖑𝖔𝖕𝖊𝖗 𝕭𝖆𝖓𝖐 𝕷𝖙𝖉
            </h1>
          </div>
          <div className="hidden mx-auto my-auto sm:block">
            <div className="flex justify-end -mr-2 items-baseline">
              <Link
                to="/"
                className="text-white px-3 py-2 justify-end rounded-md text-base md:text-lg font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-white px-3 py-2 justify-end rounded-md text-base md:text-lg font-medium"
              >
                About
              </Link>
              <Link
                to="/carriers"
                className="text-white px-3 py-2 justify-end rounded-md text-base md:text-lg font-medium"
              >
                Carriers
              </Link>
              <Link
                to="/dashboard"
                className="text-white px-3 py-2 justify-end rounded-md text-base md:text-lg font-medium"
              >
                Dashboard
              </Link>
              <Link
                  to="/login"
                  className="text-white px-3 py-2 justify-end rounded-md text-base md:text-lg font-medium"
                >
                  Login
                </Link>
            </div>
          </div>
        </div>
        <div onClick={() => setOpen(!open)} className="-mr-2 flex sm:hidden">
          {open ? (
            <AiOutlineClose className="w-8 h-8 text-gray-50" />
          ) : (
            <GiHamburgerMenu className="w-8 h-8 text-gray-50" />
          )}
        </div>
      </div>
    </div>
    <div
      className={`${
        open ? "block" : "hidden"
      } absolute z-20 bg-[#0087C7] w-full opacity-90`}
    >
      <div className="px-2 pt-2 sm:hidden pb-3 space-y-1 sm:px-3">
        <Link
          to="/"
          className="text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          About
        </Link>
        <Link
          to="/carriers"
          className="text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          Carriers
        </Link>
        <Link
          to="/dashboard"
          className="text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          Dashboard
        </Link>
        <Link
            to="/login"
            className="text-white px-3 py-2 justify-end rounded-md text-base md:text-lg font-medium"
          >
            Login
          </Link>
      </div>
    </div>
  </nav>
  )
}

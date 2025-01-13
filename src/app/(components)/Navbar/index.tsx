"use client";
import React, { useState } from "react";
import Link from "next/link";
import ThemeSwitcher from "../ThemeSwitcher";
import Logo from "../Logo";
import NavLinks from "../NavLinks";

const Navbar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-[#26284c] text-white p-4 sticky top-0 z-20 shadow-custom-light">
      <div className="container mx-auto max-sm:hidden md:flex justify-evenly items-center">
        <Link href="/" className="text-2xl font-bold rounded-[10px]">
          <Logo width={140} height={39} />
        </Link>
        <NavLinks />
        <ThemeSwitcher />
      </div>
      <div className="md:hidden flex justify-between">
        <Link href="/" className="text-2xl font-bold rounded-[10px] block">
          <Logo width={100} height={30} />
        </Link>
        <ThemeSwitcher />
        <div className="ml-10">
          <i
            className="fa-solid fa-bars dark:text-white text-black"
            onClick={() => setIsSideBarOpen(true)}
          ></i>
        </div>
      </div>
      {isSideBarOpen && (
        <div className="fixed dark:bg-[#ff5434] bg-[#8f9598] bg inset-0 p-4">
          <div className="flex justify-between">
            <Link href="/" className="text-2xl font-bold rounded-[10px] block">
              <Logo width={100} height={30} />
            </Link>
            <div className="ml-11">
              <i
                className="fa-solid fa-x dark:text-white text-black"
                onClick={() => setIsSideBarOpen(false)}
              ></i>
            </div>
          </div>
          <div>
            <NavLinks />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

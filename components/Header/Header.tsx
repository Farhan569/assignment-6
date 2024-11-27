"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  return (
    <header className="md:bg-[#F7F7F7] border-b md:border-[#676767] border-black w-full lg:px-16 px-6">
      <nav className="flex justify-between items-center max-auto gap-8">
        <Link className="inline-flex gap-[8.02px] py-[29px] " href="/">
          <Image
            src="/images/Frame 1.svg"
            alt="WebLogo"
            width={32.58}
            height={30.38}
          />
          <h1 className="font-bold text-[25.07px]">Ddsgnr</h1>
        </Link>
        <div className="md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full items-center inline-flex gap-8">
          <div className="flex md:flex-row flex-col md:items-center md:gap-8 gap-8">
            <Link className="hover:text-gray-500" href="#">
              Home
            </Link>
            <Link className="hover:text-gray-500" href="#">
              Courses
            </Link>
            <Link className="hover:text-gray-500" href="#">
              Services
            </Link>
            <Link className="hover:text-gray-500" href="#">
              Achievement
            </Link>
            <Link className="hover:text-gray-500" href="#">
              About Us
            </Link>
            <Link className="hover:text-gray-500" href="#">
              Testimonial
            </Link>
          </div>
          <div className="flex gap-4">
            <Button className="bg-transparent text-black border border-black rounded-[5px] py-2 px-5 gap-2 hover:bg-gray-300">
              Login
            </Button>
            <Button className="rounded-[5px] py-2 px-5 gap-2">Sign Up</Button>
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <button
            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            onClick={toggleNavbar}
          >
            {isClick ? (
              <Image
                src="/images/close.svg"
                alt="Close"
                width={24}
                height={24}
              />
            ) : (
              <Image src="/images/Menu.svg" alt="Menu" width={24} height={24} />
            )}
          </button>
        </div>
      </nav>
      {isClick && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="md:w-auto w-full items-center inline-flex px-5 gap-8">
              <div className="items-center md:gap-8 gap-8">
                <Link className="hover:text-gray-500 block p-2" href="#">
                  Home
                </Link>
                <Link className="hover:text-gray-500 block p-2" href="#">
                  Courses
                </Link>
                <Link className="hover:text-gray-500 block p-2" href="#">
                  Services
                </Link>
                <Link className="hover:text-gray-500 block p-2" href="#">
                  Achievement
                </Link>
                <Link className="hover:text-gray-500 block p-2" href="#">
                  About Us
                </Link>
                <Link className="hover:text-gray-500 block p-2" href="#">
                  Testimonial
                </Link>
                <div className="flex gap-4 py-4">
                  <Button className="bg-transparent text-black border border-black rounded-[5px] py-2 px-5 gap-2 hover:bg-gray-200 block">
                    Login
                  </Button>
                  <Button className="rounded-[5px] py-2 px-5 gap-2">
                    Sign Up
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

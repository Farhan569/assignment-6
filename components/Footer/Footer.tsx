import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col lg:p-20 px-12 py-6 gap-12 lg:gap-20">
      <div className="flex flex-col gap-12">
        <div className="flex max-md:flex-col lg:justify-between gap-6">
          <div className="flex flex-col max-md:items-center max-md:text-center justify-center max-md:gap-4">
            <h6 className="font-semibold text-lg text-left">
              Subscribe to our newsletter
            </h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex max-md:flex-col gap-4">
              <input
                type="text"
                placeholder="Enter your email"
                className="border border-black drop-shadow-lg text-[#505050] rounded-[5px] p-3 gap-2"
              />
              <Button className="flex bg-transparent text-black border border-black rounded-[5px] px-3 py-6 gap-2 hover:bg-gray-300">
                Subscribe
              </Button>
            </div>
            <p className="text-xs flex max-md:justify-center">
              By subscribing you agree to with our <u className=" hover:text-gray-500">Privacy Policy</u>
            </p>
          </div>
        </div>
        <div className="flex max-md:flex-col max-md:justify-center lg:justify-between max-md:text-center gap-8 lg:gap-10">
          <div>
            <Link className="inline-flex gap-[10.5px] py-[29px] " href="/">
              <Image
                src="/images/Frame 1.svg"
                alt="WebLogo"
                width={32.58}
                height={30.38}
              />
              <h1 className="font-bold text-[25.07px]">Ddsgnr</h1>
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="font-semibold">Courses</h2>
            <nav>
              <ul>
                <button className="py-2 text-sm hover:text-gray-500">Business</button>
              </ul>
              <ul>
                <button className="py-2 text-sm hover:text-gray-500">Development</button>
              </ul>
              <ul>
                <button className="py-2 text-sm hover:text-gray-500">Technology</button>
              </ul>
              <ul>
                <button className="py-2 text-sm hover:text-gray-500">Design</button>
              </ul>
              <ul>
                <button className="py-2 text-sm hover:text-gray-500">Programming</button>
              </ul>
            </nav>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="font-semibold">Resources</h2>
            <nav>
              <ul>
                <button className="py-2 text-sm hover:text-gray-500">Career</button>
              </ul>
              <ul>
                <button className="py-2 text-sm hover:text-gray-500">Resume</button>
              </ul>
              <ul>
                <button className="py-2 text-sm hover:text-gray-500">Learning</button>
              </ul>
              <ul>
                <button className="py-2 text-sm hover:text-gray-500">Interview Preparation</button>
              </ul>
              <ul>
                <button className="py-2 text-sm hover:text-gray-500">Jobs</button>
              </ul>
            </nav>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="font-semibold">About Us</h2>
            <nav>
              <ul>
                <button className="py-2 text-sm hover:text-gray-500">Contact</button>
              </ul>
              <ul>
                <button className="py-2 text-sm hover:text-gray-500">Help/Support</button>
              </ul>
              <ul>
                <button className="py-2 text-sm hover:text-gray-500">FAQ</button>
              </ul>
              <ul>
                <button className="py-2 text-sm hover:text-gray-500">Terms and Conditions</button>
              </ul>
              <ul>
                <button className="py-2 text-sm hover:text-gray-500">Partners</button>
              </ul>
            </nav>
          </div>
        </div>
        <div className="border-t border-black flex gap-8">
          <div className="flex max-md:flex-col max-md:justify-center w-full lg:justify-between items-center pt-8 gap-6">
            <div className="flex max-md:flex-col text-center gap-6">
              <p>2023 Ddsgnr. All right reserved.</p>
              <div className="flex gap-[14px]">
                <Link href="" className="text-sm hover:text-gray-500">
                  <u>Privacy Policy</u>
                </Link>
                <Link href="" className="text-sm hover:text-gray-500">
                  <u>Terms of Service</u>
                </Link>
                <Link href="" className="text-sm hover:text-gray-500">
                  <u>Cookies Settings</u>
                </Link>
              </div>
            </div>
            <div className="inline-flex gap-3">
              <Image
                className="hover:bg-gray-300"
                src="/images/Icons/Facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
              <Image
                className="hover:bg-gray-300"
                src="/images/Icons/Instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
              <Image
                className="hover:bg-gray-300"
                src="/images/Icons/Twitter.svg"
                alt="Twitter"
                width={24}
                height={24}
              />
              <Image
                className="hover:bg-gray-300"
                src="/images/Icons/Linkedin.svg"
                alt="Linkedin"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

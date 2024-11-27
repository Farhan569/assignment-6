import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Courses = () => {
  return (
    <div className="flex flex-col py-12 px-6 lg:py-28 lg:px-16 gap-12">
      <div className="flex flex-col text-center gap-4">
        <h1 className="font-bold text-[32px] lg:text-[56px]">Courses</h1>
        <p className="text-lg">Your Ultimate Guide to learning</p>
      </div>
      <div className="flex flex-col gap-16">
        <div className="flex items-center justify-center">
          <button className="border-b border-[#676767] flex px-2 py-4 gap-2 hover:bg-gray-300">
            Popular
          </button>
          <button className="flex px-2 py-4 gap-2 hover:bg-gray-300">Recommended</button>
          <button className="flex px-2 py-4 gap-2 hover:bg-gray-300">Best Price</button>
        </div>
        <div className="flex max-md:flex-col gap-16">
          <div className="flex flex-col justify-center items-start rounded-[5px] bg-[#F7F7F7] gap-6">
            <Image
              className="w-auto rounded-[5px]"
              src="/images/Design 201.svg"
              alt="UX/UI Design 201"
              width={300}
              height={300}
            />
            <div className="flex flex-col justify-center px-4 pb-6 gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-sm">Design</p>
                  <div className="flex items-center justify-center gap-1">
                    <Image
                      src="/images/Star 1.svg"
                      alt="RatingStar"
                      width={24}
                      height={24}
                    />
                    <p className="text-sm">5.0</p>
                  </div>
                </div>
                <h5 className="font-bold text-2xl">UX/UI Design 201</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Button className="bg-transparent text-black border border-black flex py-2 px-5 gap-2 rounded-[5px] hover:bg-gray-200">
                  Enroll Now
                </Button>
                <button className="flex font-medium px-5 py-2 gap-2">
                  $400
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start rounded-[5px] bg-[#F7F7F7] gap-6">
            <Image
              className="w-auto rounded-[5px]"
              src="/images/Programmimg.svg"
              alt="Programmimg"
              width={300}
              height={300}
            />
            <div className="flex flex-col justify-center px-4 pb-6 gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-sm">Programmimg</p>
                  <div className="flex items-center justify-center gap-1">
                    <Image
                      src="/images/Star 1.svg"
                      alt="RatingStar"
                      width={24}
                      height={24}
                    />
                    <p className="text-sm">5.0</p>
                  </div>
                </div>
                <h5 className="font-bold text-2xl">Introduction to Python</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Button className="bg-transparent text-black border border-black flex py-2 px-5 gap-2 rounded-[5px] hover:bg-gray-200">
                  Enroll Now
                </Button>
                <button className="flex font-medium px-5 py-2 gap-2">
                  $400
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start rounded-[5px] bg-[#F7F7F7] gap-6">
            <Image
              className="w-auto rounded-[5px]"
              src="/images/Data Analysis.svg"
              alt="Data Analysis"
              width={300}
              height={300}
            />
            <div className="flex flex-col justify-center px-4 pb-6 gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-sm">Business</p>
                  <div className="flex items-center justify-center gap-1">
                    <Image
                      src="/images/Star 1.svg"
                      alt="RatingStar"
                      width={24}
                      height={24}
                    />
                    <p className="text-sm">5.0</p>
                  </div>
                </div>
                <h5 className="font-bold text-2xl">
                  Data Analysis for Beginners
                </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Button className="bg-transparent text-black border border-black flex py-2 px-4 gap-2 rounded-[5px] hover:bg-gray-200">
                  Enroll Now
                </Button>
                <button className="flex font-medium py-2 px-5 gap-2">
                  $400
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="max-md:hidden flex max-md:flex-col gap-16">
          <div className="flex flex-col justify-center items-start rounded-[5px] bg-[#F7F7F7] gap-6">
            <Image
              className="w-auto rounded-[5px]"
              src="/images/Art Specialization.svg"
              alt="Art Specialization"
              width={300}
              height={300}
            />
            <div className="flex flex-col justify-center px-4 pb-6 gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-sm">Art</p>
                  <div className="flex items-center justify-center gap-1">
                    <Image
                      src="/images/Star 1.svg"
                      alt="RatingStar"
                      width={24}
                      height={24}
                    />
                    <p className="text-sm">5.0</p>
                  </div>
                </div>
                <h5 className="font-bold text-2xl">Art Specialization</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Button className="bg-transparent text-black border border-black flex py-2 px-5 gap-2 rounded-[5px] hover:bg-gray-200">
                  Enroll Now
                </Button>
                <button className="flex font-medium px-5 py-2 gap-2">
                  $400
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start rounded-[5px] bg-[#F7F7F7] gap-6">
            <Image
              className="w-auto rounded-[5px]"
              src="/images/Rule of Law.svg"
              alt="Rule of Law"
              width={300}
              height={300}
            />
            <div className="flex flex-col justify-center px-4 pb-6 gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-sm">Law</p>
                  <div className="flex items-center justify-center gap-1">
                    <Image
                      src="/images/Star 1.svg"
                      alt="RatingStar"
                      width={24}
                      height={24}
                    />
                    <p className="text-sm">5.0</p>
                  </div>
                </div>
                <h5 className="font-bold text-2xl">Rule of Law</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Button className="bg-transparent text-black border border-black flex py-2 px-5 gap-2 rounded-[5px] hover:bg-gray-200">
                  Enroll Now
                </Button>
                <button className="flex font-medium px-5 py-2 gap-2">
                  $400
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start rounded-[5px] bg-[#F7F7F7] gap-6">
            <Image
              className="w-auto rounded-[5px]"
              src="/images/webflow.svg"
              alt="webflow"
              width={300}
              height={300}
            />
            <div className="flex flex-col justify-center px-4 pb-6 gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-sm">Tech</p>
                  <div className="flex items-center justify-center gap-1">
                    <Image
                      src="/images/Star 1.svg"
                      alt="RatingStar"
                      width={24}
                      height={24}
                    />
                    <p className="text-sm">5.0</p>
                  </div>
                </div>
                <h5 className="font-bold text-2xl">
                Introduction to webflow
                </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Button className="bg-transparent text-black border border-black flex py-2 px-4 gap-2 rounded-[5px] hover:bg-gray-200">
                  Enroll Now
                </Button>
                <button className="flex font-medium py-2 px-5 gap-2">
                  $400
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Button className="bg-transparent text-black border border-black flex py-2 px-5 gap-2 rounded-[5px] hover:bg-gray-200">
            View All Courses
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Courses;

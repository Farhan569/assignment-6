import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

const ExploreCourses = () => {
  return (
    <div className="flex flex-col justify-between items-center py-28 px-16 gap-20">
      <div className="flex flex-col gap-9 text-center">
        <h1 className="font-bold lg:text-5xl text-[32px]">
          Explore Courses By Category
        </h1>
        <p className="text-lg">
          Discover a wide range of courses covering a variety of subjects,
          taught by expert instructors.
        </p>
      </div>
      <div className="flex flex-col justify-between items-center gap-24">
        <div className="flex max-md:flex-col gap-6">
          <div className="bg-[#F7F7F7] w-[410.67px] h-[132px] rounded-[5px] inline-flex items-center gap-8 p-4">
            <div className="bg-white p-[34px] gap-[10px] flex items-center justify-center">
              <Image
                src="/images/pen-tool-2.svg"
                alt="Pen Tool"
                width={32}
                height={32}
              />
            </div>
            <div className="gap-4">
              <h2 className="text-lg font-semibold">Design & Development</h2>
              <p>50+ Courses Available</p>
            </div>
          </div>
          <div className="bg-[#F7F7F7] w-[410.67px] h-[132px] rounded-[5px] inline-flex items-center gap-8 p-4">
            <div className="bg-white p-[34px] gap-[10px] flex items-center justify-center">
              <Image
                src="/images/volume-high.svg"
                alt="Volume sign"
                width={32}
                height={32}
              />
            </div>
            <div className="gap-4">
              <h2 className="text-lg font-semibold">Marketing</h2>
              <p>50+ Courses Available</p>
            </div>
          </div>
          <div className="bg-[#F7F7F7] w-[410.67px] h-[132px] rounded-[5px] inline-flex items-center gap-8 p-4">
            <div className="bg-white p-[34px] gap-[10px] flex items-center justify-center">
              <Image
                src="/images/group.svg"
                alt="group"
                width={32}
                height={32}
              />
            </div>
            <div className="gap-4">
              <h2 className="text-lg font-semibold">Development</h2>
              <p>50+ Courses Available</p>
            </div>
          </div>
        </div>
        <div className="max-md:hidden flex gap-6">
          <div className="bg-[#F7F7F7] w-[410.67px] h-[132px] rounded-[5px] inline-flex items-center gap-8 p-4">
            <div className="bg-white p-[34px] gap-[10px] flex items-center justify-center">
              <Image
                src="/images/microphone.svg"
                alt="Microphone"
                width={32}
                height={32}
              />
            </div>
            <div className="gap-4">
              <h2 className="text-lg font-semibold">Communication</h2>
              <p>50+ Courses Available</p>
            </div>
          </div>
          <div className="bg-[#F7F7F7] w-[410.67px] h-[132px] rounded-[5px] inline-flex items-center gap-8 p-4">
            <div className="bg-white p-[34px] gap-[10px] flex items-center justify-center">
              <Image src="/images/link.svg" alt="link" width={32} height={32} />
            </div>
            <div className="gap-4">
              <h2 className="text-lg font-semibold">Digital Marketing</h2>
              <p>50+ Courses Available</p>
            </div>
          </div>
          <div className="bg-[#F7F7F7] w-[410.67px] h-[132px] rounded-[5px] inline-flex items-center gap-8 p-4">
            <div className="bg-white p-[34px] gap-[10px] flex items-center justify-center">
              <Image
                src="/images/arrow-2.svg"
                alt="Two Arrows"
                width={32}
                height={32}
              />
            </div>
            <div className="gap-4">
              <h2 className="text-lg font-semibold">Self Development</h2>
              <p>50+ Courses Available</p>
            </div>
          </div>
        </div>
        <div className="max-md:hidden flex gap-6">
          <div className="bg-[#F7F7F7] w-[410.67px] h-[132px] rounded-[5px] inline-flex items-center gap-8 p-4">
            <div className="bg-white p-[34px] gap-[10px] flex items-center justify-center">
              <Image
                src="/images/briefcase.svg"
                alt="Briefcase"
                width={32}
                height={32}
              />
            </div>
            <div className="gap-4">
              <h2 className="text-lg font-semibold">Business</h2>
              <p>50+ Courses Available</p>
            </div>
          </div>
          <div className="bg-[#F7F7F7] w-[410.67px] h-[132px] rounded-[5px] inline-flex items-center gap-8 p-4">
            <div className="bg-white p-[34px] gap-[10px] flex items-center justify-center">
              <Image src="/images/book.svg" alt="Book" width={32} height={32} />
            </div>
            <div className="gap-4">
              <h2 className="text-lg font-semibold">Finance</h2>
              <p>50+ Courses Available</p>
            </div>
          </div>
          <div className="bg-[#F7F7F7] w-[410.67px] h-[132px] rounded-[5px] inline-flex items-center gap-8 p-4">
            <div className="bg-white p-[34px] gap-[10px]flex items-center justify-center">
              <Image
                src="/images/book-2.svg"
                alt="Book"
                width={32}
                height={32}
              />
            </div>
            <div className="gap-4">
              <h2 className="text-lg font-semibold">Consulting</h2>
              <p>50+ Courses Available</p>
            </div>
          </div>
        </div>
        <Button className="bg-transparent text-black border border-black py-3 px-6 gap-2 rounded-[5px] hover:bg-gray-200">
          View All Courses
        </Button>
      </div>
    </div>
  );
};

export default ExploreCourses;

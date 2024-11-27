import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Team = () => {
  return (
    <section className="bg-[#F7F7F7] flex flex-col max-md:justify-center max-md:items-center py-12 px-6 lg:py-28 lg:px-16 gap-12 lg:gap-20">
      <div className="flex flex-col gap-4">
        <h2 className="font-bold lg:text-5xl text-[32px] text-center">
          Our Team
        </h2>
        <p className="lg:text-lg text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </p>
      </div>
      <div className="flex lg:flex-col gap-24">
        <div className="flex lg:flex-col gap-16">
          <div className="flex max-md:flex-col lg:justify-between gap-16 lg:gap-12">
            <div className="flex flex-col items-center justify-center gap-6">
              <Image
                src="/images/Team/James Nduku.svg"
                alt="James Nduku"
                width={80}
                height={80}
              />
              <div className="flex flex-col text-center gap-4">
                <h3 className="font-semibold text-[20px]">James Nduku</h3>
                <p className="text-lg">Marketing Coordinator</p>
              </div>
              <div className="flex gap-[14px]">
                <Image
                  className="hover:bg-gray-300"
                  src="/images/Icons/Linkedin.svg"
                  alt="Linkedin"
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
                  src="/images/Icons/Dribble.svg"
                  alt="Dribble"
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-6">
              <Image
                src="/images/Team/Joseph Munyambu.svg"
                alt="Joseph Munyambu"
                width={80}
                height={80}
              />
              <div className="flex flex-col text-center gap-4">
                <h3 className="font-semibold text-[20px]">Joseph Munyambu</h3>
                <p className="text-lg">Nursing Assistant</p>
              </div>
              <div className="flex gap-[14px]">
                <Image
                  className="hover:bg-gray-300"
                  src="/images/Icons/Linkedin.svg"
                  alt="Linkedin"
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
                  src="/images/Icons/Dribble.svg"
                  alt="Dribble"
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-6">
              <Image
                src="/images/Team/Joseph Ngumbau.svg"
                alt="Joseph Ngumbau"
                width={80}
                height={80}
              />
              <div className="flex flex-col text-center gap-4">
                <h3 className="font-semibold text-[20px]">Joseph Ngumbau</h3>
                <p className="text-lg">Medical Assistant</p>
              </div>
              <div className="flex gap-[14px]">
                <Image
                  className="hover:bg-gray-300"
                  src="/images/Icons/Linkedin.svg"
                  alt="Linkedin"
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
                  src="/images/Icons/Dribble.svg"
                  alt="Dribble"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
          <div className="max-md:hidden flex lg:justify-between lg:gap-12">
            <div className="flex flex-col items-center justify-center gap-6">
              <Image
                src="/images/Team/Erick Kipkemboi.svg"
                alt="Erick Kipkemboi"
                width={80}
                height={80}
              />
              <div className="flex flex-col text-center gap-4">
                <h3 className="font-semibold text-[20px]">Erick Kipkemboi</h3>
                <p className="text-lg">Web Designer</p>
              </div>
              <div className="flex gap-[14px]">
                <Image
                  className="hover:bg-gray-300"
                  src="/images/Icons/Linkedin.svg"
                  alt="Linkedin"
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
                  src="/images/Icons/Dribble.svg"
                  alt="Dribble"
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-6">
              <Image
                src="/images/Team/Stephen Kerubo.svg"
                alt="Stephen Kerubo"
                width={80}
                height={80}
              />
              <div className="flex flex-col text-center gap-4">
                <h3 className="font-semibold text-[20px]">Stephen Kerubo</h3>
                <p className="text-lg">President of Sales</p>
              </div>
              <div className="flex gap-[14px]">
                <Image
                  className="hover:bg-gray-300"
                  src="/images/Icons/Linkedin.svg"
                  alt="Linkedin"
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
                  src="/images/Icons/Dribble.svg"
                  alt="Dribble"
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-6">
              <Image
                src="/images/Team/John Leboo.svg"
                alt="John Leboo"
                width={80}
                height={80}
              />
              <div className="flex flex-col text-center gap-4">
                <h3 className="font-semibold text-[20px]">John Leboo</h3>
                <p className="text-lg">Dog Trainer</p>
              </div>
              <div className="flex gap-[14px]">
                <Image
                  className="hover:bg-gray-300"
                  src="/images/Icons/Linkedin.svg"
                  alt="Linkedin"
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
                  src="/images/Icons/Dribble.svg"
                  alt="Dribble"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Button className="lg:hidden bg-transparent text-black border border-black py-3 px-6 gap-2 rounded-[5px] hover:bg-gray-200">
          View All
        </Button>
      </div>
    </section>
  );
};

export default Team;

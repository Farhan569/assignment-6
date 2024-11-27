import Image from "next/image";
import React from "react";

const HeaderTop = () => {
  return (
    <div className="max-md:hidden  bg-[#F7F7F7] px-16 border-b border-[#676767] mb-4">
      <div className="flex justify-between items-center mx-auto py-3 gap-8">
        <div className="inline-flex gap-4 ">
          <div className="text-sm border-r border-[#676767] pr-4">
            Phone Number: 956 742 455 678
          </div>
          <div className="text-sm">Email:info@ddsgnr.com</div>
        </div>
        <div className="flex gap-4">
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
  );
};

export default HeaderTop;

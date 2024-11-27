import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="lg:flex justify-between items-center md:grid md:grid-cols-4 lg:py-20 lg:px-16 py-12 px-6 gap-16 md:gap-6 bg-[#F7F7F7]">
      <h5 className="max-md:hidden text-2xl font-bold">
        Trusted by 2000+ companies worldwide.
      </h5>
      <h5 className="lg:hidden text-lg font-bold">
        Trusted by the world's best companies [social proof to build
        credibility]
      </h5>
      <div className="flex max-md:flex-col lg:inline-flex px-[8.74px] max-md:py-4 max-md:gap-4 gap-[19.12px]">
        <Image
          src="/images/Logo/AirbnbLogo.svg"
          alt="Airbnb Logo"
          width={123.8}
          height={38.52}
        />
        <Image
          src="/images/Logo/AirbnbLogo2.svg"
          alt="AirbnbLogo2"
          width={123.8}
          height={38.52}
        />
        <Image
          src="/images/Logo/AirbnbLogo3.svg"
          alt="AirbnbLogo3"
          width={123.8}
          height={38.52}
        />
        <Image
          src="/images/Logo/AirbnbLogo4.svg"
          alt="AirbnbLogo4"
          width={123.8}
          height={38.52}
        />
        <Image
          src="/images/Logo/AirbnbLogo5.svg"
          alt="AirbnbLogo5"
          width={123.8}
          height={38.52}
        />
      </div>
    </div>
  );
};

export default Hero;

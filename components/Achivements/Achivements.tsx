import React from "react";

const Achivements = () => {
  return (
    <div className="flex flex-col px-12 lg:px-28 py-6 lg:py-16 lg:gap-20 gap-12">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col justify-center items-center gap-4">
          <h4 className="font-bold text-[32px] lg:text-5xl">Our Achivements</h4>
          <p className="md:hidden text-lg text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.{" "}
          </p>
          <p className="max-md:hidden text-lg text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
        </div>
        <div className="flex max-md:flex-col gap-6 justify-center items-center">
          <div className="flex items-center justify-center w-full gap-4 py-2">
            <div className="w-1/2 flex flex-col justify-center items-center gap-2">
              <h6 className="font-bold text-xl lg:text-[40px]">+200</h6>
              <p>Courses</p>
            </div>
            <div className="w-1/2 flex flex-col justify-center items-center gap-2">
              <h6 className="font-bold text-xl lg:text-[40px]">50K</h6>
              <p>Mentors</p>
            </div>
          </div>
          <div className="flex items-center justify-center w-full gap-4 py-2">
            <div className="w-1/2 flex flex-col justify-center items-center gap-2">
              <h6 className="font-bold text-xl lg:text-[40px]">370k</h6>
              <p>Students</p>
            </div>
            <div className="w-1/2 flex flex-col justify-center items-center gap-2">
              <h6 className="font-bold text-xl lg:text-[40px]">100+</h6>
              <p>Recognition</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achivements;

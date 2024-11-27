import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <div className="lg:bg-[#F7F7F7] flex flex-col px-6 py-12 lg:px-16 lg:py-28 lg:gap-20 gap-12">
      <div className="flex flex-col max-md:text-center gap-6">
        <h4 className="lg:hidden font-bold text-[32px]">
          What Our Student Say
        </h4>
        <h2 className="max-md:hidden font-bold text-5xl">
          Customer testimonials
        </h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="flex flex-col gap-12">
        <div className="flex gap-8">
          <div className="border border-black flex flex-col p-8 gap-6 hover:bg-gray-300">
            <Image
              src="/images/Stars.svg"
              alt="Rating Stars"
              width={116}
              height={18.89}
            />
            <div className="flex flex-col gap-6">
              <p className="text-lg">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare."
              </p>
              <div className="flex gap-5">
                <Image
                  className="rounded-full"
                  src="/images/Team/Joseph Ngumbau.svg"
                  alt="testimonial"
                  width={56}
                  height={56}
                />
                <div>
                  <h6 className="font-semibold">Wade Warren</h6>
                  <p>Position, Company name</p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-md:hidden border border-black flex flex-col p-8 gap-6 hover:bg-gray-300">
            <Image
              src="/images/Stars.svg"
              alt="Rating Stars"
              width={116}
              height={18.89}
            />
            <div className="flex flex-col gap-6">
              <p className="text-lg">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare."
              </p>
              <div className="flex gap-5">
                <Image
                  className="rounded-full"
                  src="/images/Team/James Nduku.svg"
                  alt="testimonial"
                  width={56}
                  height={56}
                />
                <div>
                  <h6 className="font-semibold">Erick Kipkemboi</h6>
                  <p>Scrum Master</p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-md:hidden border border-black flex flex-col p-8 gap-6 hover:bg-gray-300">
            <Image
              src="/images/Stars.svg"
              alt="Rating Stars"
              width={116}
              height={18.89}
            />
            <div className="flex flex-col gap-6">
              <p className="text-lg">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare."
              </p>
              <div className="flex gap-5">
                <Image
                  className="rounded-full"
                  src="/images/Team/John Leboo.svg"
                  alt="testimonial"
                  width={56}
                  height={56}
                />
                <div>
                  <h6 className="font-semibold">Stephen Kerubo</h6>
                  <p>UI/UX Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <Image
              src="/images/Slider Dots.svg"
              alt="Slider"
              width={72}
              height={8}
            />
          </div>
          <div className="flex gap-[15px]">
            <button className="border border-black flex rounded-full p-3 gap-2 hover:bg-gray-200">
              <Image
                src="/images/Left Arrow.svg"
                alt="Left Arrow"
                width={24}
                height={24}
              />
            </button>
            <button className="border border-black flex rounded-full p-3 gap-2 hover:bg-gray-200">
              <Image
                src="/images/Right Arrow.svg"
                alt="Right Arrow"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

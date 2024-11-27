import Image from "next/image";
import Hero from "@/components/Hero/Hero";
import ExploreCourses from "@/components/ExploreCourses/ExploreCourses";
import Achivements from "@/components/Achivements/Achivements";
import Courses from "@/components/Courses/Courses";
import Team from "@/components/Team/Team";
import Testimonial from "@/components/Testimonial/Testimonial";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="lg:flex w-full lg:justify-between grid md:grid-cols-2">
        <div className="lg:w-1/2 flex flex-col items-start justify-center py-16 px-6 lg:pr-[60px] lg:pl-20 gap-6">
          <div className="flex flex-col gap-6">
            <h1 className="font-bold text-[40px] lg:text-[56px]">
              Learn new skills online with ease
            </h1>
            <p className="text-lg">
              Discover a wide range of courses covering a variety of subjects,
              taught by expert instructors.
            </p>
          </div>
          <div className="inline-flex pt-4 gap-4">
            <button className="border bg-black text-white rounded-[5px] py-3 px-6 gap-2 hover:bg-primary/90">
              Start learning now
            </button>
            <button className="border border-black rounded-[5px] py-3 px-6 gap-2 hover:bg-gray-300">
              Explore Courses
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          <Image src="/images/Image.svg" alt="Image" width={640} height={900} />
        </div>
      </div>
      <Hero />
      <ExploreCourses />
      <Achivements />
      <Courses />
      <Team />
      <Testimonial/>
      <Footer/>
    </div>
  );
}

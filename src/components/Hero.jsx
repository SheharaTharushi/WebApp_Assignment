import React from "react";
import heroImage from "../assets/images/hero.png";

const Hero = () => {
  return (
    <section className="bg-[#1090CB1A] py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold">
            Experienced <span className="text-[#1090CB]">mobile and web</span> applications and website builders measuring
          </h2>
          <p className="mt-4 text-gray-600">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & IOS.
          </p>
          <div className="mt-6">
            <button className="bg-blue-600 text-white px-6 py-2 rounded mr-2">Contact Us</button>
            <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded">View More</button>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 md:ml-10">
          <img src={heroImage} alt="Hero Image" className="w-3/4 md:w-2/3 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

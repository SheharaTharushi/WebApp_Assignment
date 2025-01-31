import React from "react";
import webAppImg from "../assets/images/web.png";
import seoImg from "../assets/images/seo.png";
import arVrImg from "../assets/images/ar.png";
import mobileImg from "../assets/images/mobile.png";

const services = [
  {
    title: "Web Application",
    image: webAppImg,
    description: "Lorem Ipsum is simply",
  },
  {
    title: "SEO",
    image: seoImg,
    description: "Lorem Ipsum is simply",
  },
  {
    title: "AR/VR Solutions",
    image: arVrImg,
    description: "Lorem Ipsum is simply",
  },
  {
    title: "Mobile Applications",
    image: mobileImg,
    description: "Lorem Ipsum is simply",
  },
];

const Services = () => {
  return (
    <section className="py-10 bg-white w-full">
      <div className="container mx-auto flex justify-between gap-8">
        {services.map((service, index) => (
          <div key={index} className="flex w-1/4 items-center space-x-4">
            {/* Image (Left) */}
            <div className="w-16 h-16 flex-shrink-0">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Text Content (Right) */}
            <div className="text-left">
              <h3 className="text-lg font-bold text-black">{service.title}</h3>
              <p className="text-gray-500 mt-2">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

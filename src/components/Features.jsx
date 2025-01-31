import React from "react";
import feature1 from "../assets/images/feature1.png";
import feature2 from "../assets/images/feature2.png";
import feature3 from "../assets/images/feature3.png";
import greenc from "../assets/images/greenc.png";
import bluec from "../assets/images/bluec.png";
import purplec from "../assets/images/purplec.png";

const featuresData = [
  {
    id: 1,
    title: "Lorem Ipsum is simply dummy text of the printing.",
    description: "KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & IOS.",
    icon: greenc, // Replace with actual icon path
    image: feature1, // ✅ Imported image
    reverse: false,
  },
  {
    id: 2,
    title: "Lorem Ipsum is simply dummy text of the printing.",
    description: "KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & IOS.",
    icon: bluec,
    image: feature2, // ✅ Imported image
    reverse: true,
  },
  {
    id: 3,
    title: "Lorem Ipsum is simply dummy text of the printing.",
    description: "KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & IOS.",
    icon: purplec,
    image: feature3, // ✅ Imported image
    reverse: false,
  },
];

const Features = () => {
  return (
    <section className="w-full bg-white py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">
          Lorem Ipsum is simply dummy text of the printing.
        </h2>
        <p className="text-gray-500 mt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
          Lorem Ipsum has been the industry's.
        </p>
      </div>

      {/* Features Content - Full Width */}
      <div className="w-full">
        <div className="space-y-16">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className={`flex flex-col md:flex-row items-center ${
                feature.reverse ? "md:flex-row-reverse" : ""
              } space-y-6 md:space-y-0`}
            >
              {/* Text Content */}
              <div className="md:w-1/2 px-6">
                <div className="flex items-center space-x-3">
                  <img src={feature.icon} alt="icon" className="w-10 h-10" />
                  <span className="text-black-600 font-semibold">
                    Lorem Ipsum is simply dummy text
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-3">
                  {/* Change "Lorem Ipsum" to blue (#1090CB) */}
                  <span className="text-[#1090CB]">Lorem Ipsum</span> is simply dummy text of the printing.
                </h3>
                <p className="text-gray-600 mt-2">{feature.description}</p>
              </div>

              {/* Image */}
              <div className="md:w-1/2">
                <img src={feature.image} alt="feature" className="w-full h-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6 md:w-1/3 text-center">
          <h3 className="text-lg font-bold text-gray-900">
            Lorem Ipsum is simply dummy text.
          </h3>
          <p className="text-gray-600 mt-2">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects.
          </p>
          <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg">
            View More
          </button>
        </div>

        <div className="bg-blue-500 shadow-lg rounded-lg p-6 md:w-1/3 text-center text-white relative">
          <h3 className="text-lg font-bold">Lorem Ipsum is simply dummy text.</h3>
          <p className="mt-2">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects.
          </p>
          <button className="mt-4 bg-white text-blue-500 px-6 py-2 rounded-lg">
            View More
          </button>
          <span className="absolute -top-3 -right-3">🔔</span>
        </div>
      </div>
    </section>
  );
};

export default Features;

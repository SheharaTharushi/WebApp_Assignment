import React from "react";

const Newsletter = () => {
  return (
    <section className="w-full py-24 px-8 text-center bg-[#E8F4FA]">
      {/* Heading */}
      <h3 className="text-3xl font-bold text-gray-800 leading-snug">
        Lorem Ipsum is simply dummy <br /> text of the printing
      </h3>

      {/* Email Input and Subscribe Button */}
      <div className="mt-8 flex justify-center items-center gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-5 py-4 w-80 md:w-96 lg:w-[400px] border border-gray-300 rounded-lg outline-none"
        />
        <button className="px-7 py-4 bg-black text-white font-semibold rounded-lg">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default Newsletter;



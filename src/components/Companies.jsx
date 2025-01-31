import React from "react";
import company1 from "../assets/images/company1.png";
import company2 from "../assets/images/company2.png";
import company3 from "../assets/images/company3.png";
import company4 from "../assets/images/company4.png";


const Companies = () => {
  return (
    <section className="w-full py-16 px-6 text-center bg-white">
      <h3 className="text-2xl font-bold text-gray-800">You will be in good company</h3>

      {/* Container for Logos */}
      <div className="mt-8 flex justify-center items-center gap-6 md:gap-10 lg:gap-14">
        <img src={company1} alt="Company 1" className="h-16 md:h-20 lg:h-24 object-contain" />
        <img src={company2} alt="Company 2" className="h-16 md:h-20 lg:h-24 object-contain" />
        <img src={company3} alt="Company 3" className="h-16 md:h-20 lg:h-24 object-contain" />
        <img src={company4} alt="Company 4" className="h-16 md:h-20 lg:h-24 object-contain" />
      </div>
    </section>
  );
};

export default Companies;
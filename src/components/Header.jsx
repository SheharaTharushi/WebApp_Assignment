import React, { useState } from "react";

const Header = () => {
  const [activePage, setActivePage] = useState("home"); // Track active page

  return (
    <header className="bg-white shadow-md" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-[#1090CB]">LOGO</h1>
        <div className="flex items-center space-x-6">
          <nav className="flex space-x-6">
            <a
              href="#"
              onClick={() => setActivePage("home")}
              className={`text-gray-600 hover:text-blue-600 relative ${activePage === "home" ? "text-[#1090CB]" : ""}`}
            >
              {activePage === "home" && (
                <span className="absolute top-0 left-0 transform -translate-y-1/2 -translate-x-1/2 w-2 h-2 bg-[#1090CB] rounded-full"></span>
              )}
              <span className={activePage === "home" ? "text-[#1090CB]" : ""}>Home</span>
            </a>
            <a
              href="#"
              onClick={() => setActivePage("about")}
              className={`text-gray-600 hover:text-blue-600 ${activePage === "about" ? "text-[#1090CB]" : ""}`}
            >
              About Us
            </a>
            <a
              href="#"
              onClick={() => setActivePage("services")}
              className={`text-gray-600 hover:text-blue-600 ${activePage === "services" ? "text-[#1090CB]" : ""}`}
            >
              Services
            </a>
            <a
              href="#"
              onClick={() => setActivePage("blog")}
              className={`text-gray-600 hover:text-blue-600 ${activePage === "blog" ? "text-[#1090CB]" : ""}`}
            >
              Blog
            </a>
          </nav>
          <a href="#" className="bg-[#1090CB] text-white px-4 py-2 rounded ml-6">
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

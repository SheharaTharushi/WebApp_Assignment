import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-300 py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* First Section: Logo */}
        <div>
          <h3 className="text-xl font-semibold text-black">Logo</h3>
          <p className="mt-2 text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <p className="mt-2 text-gray-500">@Lorem</p>
        </div>

        {/* Second Section: About Us */}
        <div>
          <h3 className="text-xl font-semibold text-black">About Us</h3>
          <ul className="mt-4 space-y-2">
            <li className="text-gray-500">lorem</li>
            <li className="text-gray-500">portfolio</li>
            <li className="text-gray-500">careers</li>
            <li className="text-gray-500">contactus</li>
          </ul>
        </div>

        {/* Third Section: Contact Us */}
        <div>
          <h3 className="text-xl font-semibold text-black">Contact Us</h3>
          <p className="mt-2 text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <p className="mt-2 text-gray-500">+908 89097 890</p>
        </div>

        {/* Fourth Section: Social Media Icons */}
        <div>
          <h3 className="text-xl font-semibold text-black">Follow Us</h3>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-blue-500">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-pink-500">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-700">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      {/* Horizontal Line */}
      <hr className="my-4 border-gray-300" />

      {/* Copyright Section */}
      <div className="text-center text-gray-500 py-4">
        Copyright ® 2024 Lorem All rights Reserved
      </div>

    </footer>
  );
};

export default Footer;

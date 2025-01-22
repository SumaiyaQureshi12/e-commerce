import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter, BsPinterest } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid md:grid-cols-3 gap-10">
        {/* About Us Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">About Us</h2>
          <p className="leading-[1.8] text-gray-300">
            We bring you fresh, delicious food made with love. From healthy bites to indulgent treats, we’ve got something for everyone.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/menu" className="text-gray-300 hover:text-white">
                Menu
              </a>
            </li>
            <li>
              <a href="/about" className="text-gray-300 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-300 hover:text-white">
                Contact
              </a>
            </li>
            
          </ul>
        </div>

        {/* Social Media Icons */}
        <div>
          <div className="flex gap-4 text-accent text-2xl pt-16 justify-center md:justify-start">
            <FaFacebookF className="hover:text-gray-500 cursor-pointer" />
            <BsTwitter className="hover:text-gray-500 cursor-pointer" />
            <BsPinterest className="hover:text-gray-500 cursor-pointer" />
            <FaLinkedinIn className="hover:text-gray-500 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center w-full mx-auto pt-8 text-gray-400 text-sm">
        &copy; Copyright 2024 All rights reserved
      </div>
    </div>
  );
};

export default Footer;

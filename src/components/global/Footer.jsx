import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaMediumM, FaInstagram} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#202122] text-white overflow-hidden relative z-10 p-[50px] text-lg">
      <div className="px-2 sm:px-8 lg:flex gap-8 max-w-[1280px] mx-auto ">
        <div className="max-w-[1280px]  mb-16 m-0 ">
          {/* First Column */}
          <div className="flex items-center gap-2 mb-6 flex-col">
            <a href="#" id="logo" className="flex items-center gap-1 pr-[30px] pb-[10px]">
              <img src="logo.png" alt="logo" className="w-10" />
              <h1 className="hidden lg:block text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                Qurashpere
              </h1>
            </a>
            {/* <span className="font-bold text-lg">QuraSphere</span> */}
            <p className="text-gray-400 text-sm mb-4">
              Bariyatu, Ranchi - 01, Jharkhand <br/>
              Pin - 834001
            </p>
            <div className="flex gap-4 mr-auto">
              <a className="text-gray-400 hover:text-white" href="#">
                <FaFacebookF />
              </a>
              <a className="text-gray-400 hover:text-white" href="https://x.com/qurasphere">
                <FaXTwitter />
              </a>
              <a className="text-gray-400 hover:text-white" href="#">
                <FaLinkedinIn />
              </a>
              <a className="text-gray-400 hover:text-white" href="https://www.instagram.com/qurasphere/">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className='gap-8 max-w-[1280px] mx-auto mb-4'>
          <h3 className="font-medium ">Services</h3>
          <ul className="space-y-3">
            <li><a className="text-gray-400 hover:text-white text-sm" href="/ai-automation-solutions">Web Design</a></li>
            <li><a className="text-gray-400 hover:text-white text-sm" href="/web-developement">Website Development</a></li>
            <li><a className="text-gray-400 hover:text-white text-sm" href="/mobile-app-development">Drupal Development</a></li>
            <li><a className="text-gray-400 hover:text-white text-sm" href="/qa-assurance-testing">WordPress Development</a></li>
            <li><a className="text-gray-400 hover:text-white text-sm" href="/devops-services">API Development</a></li>
            <li><a className="text-gray-400 hover:text-white text-sm" href="/devops-services">Software Development</a></li>
          </ul>
        </div>

        {/* Third Column */}
        <div className='gap-8 max-w-[1280px] mx-auto mb-4'>
          <h3 className="font-medium ">Site Map</h3>
          <ul className="space-y-3">
            <li><a className="text-gray-400 hover:text-white text-sm" href="/project-management">Home</a></li>
            <li><a className="text-gray-400 hover:text-white text-sm" href="/crm">Services</a></li>
            <li><a className="text-gray-400 hover:text-white text-sm" href="/client-onborading">About Us</a></li>
            <li><a className="text-gray-400 hover:text-white text-sm" href="/website-builder">Contact Us</a></li>
          </ul>
        </div>

        {/* Fourth Column */}
        {/* <div className='gap-8 max-w-[1280px] mx-auto'>
          <h3 className="font-medium mb-4">About</h3>
          <ul className="space-y-3">
            <li><a className="text-gray-400 hover:text-white text-sm" href="#">Clients</a></li>
            <li><a className="text-gray-400 hover:text-white text-sm" href="#">Join Us</a></li>
            <li><a className="text-gray-400 hover:text-white text-sm" href="/about">About Us</a></li>
          </ul>
        </div> */}
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8  pt-8 flex flex-col md:flex-row justify-between max-w-[1280px] mx-auto">
        <p className="text-gray-400 text-sm">© 2025 Qurasphere. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a className="text-gray-400 hover:text-white text-sm" href="#">Privacy Policy</a>
          <a className="text-gray-400 hover:text-white text-sm" href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

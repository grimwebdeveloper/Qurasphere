import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaMediumM, } from 'react-icons/fa';

function Footer() { 
  return (
    <footer className="bg-[#202122] text-white overflow-hidden relative z-10 p-[20px]">
        <div className="px-2 sm:px-8 lg:flex gap-8 max-w-[1280px] mx-auto ">
          <div className=" gap-8 max-w-[1280px] mx-auto mb-16">
            {/* First Column */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full flex items-center justify-center">
                  <img alt="logo" loading="lazy" width="30" height="30" decoding="async" src="/logosvg.svg" />
                </div>
                <span className="font-bold text-lg">QuraSphere</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                R-28-C1, First Floor, R-Block,<br />
                Kovaipudur, Coimbatore, 641042
              </p>
              <div className="flex gap-4 opacity-50">
                <a className="text-gray-400 hover:text-white" href="#">
                  <img alt="Facebook logo" loading="lazy" width="20" height="20" decoding="async" src="/tech/FB.svg" />
                </a>
                <a target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" href="https://x.com/agenciFlow">
                  <img alt="X" loading="lazy" width="18" height="21" decoding="async" src="/tech/wer.svg" />
                </a>
                <a target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" href="#">
                  <img alt="Instagram" loading="lazy" width="20" height="20" decoding="async" src="/tech/Insta.svg" />
                </a>
                <a target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" href="https://www.linkedin.com/company/agenciflow-india/">
                  <img alt="Linked In" loading="lazy" width="20" height="20" decoding="async" src="/tech/LIN.svg" />
                </a>
                <a target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" href="https://dribbble.com/agenciFlow">
                  <img alt="Dribble" loading="lazy" width="20" height="20" decoding="async" src="/tech/dribbble2.svg" />
                </a>
              </div>
            </div>

            {/* Second Column */}
            <div className='gap-8 max-w-[1280px] mx-auto mb-4'>
              <h3 className="font-medium ">Services</h3>
              <ul className="space-y-3">
                <li><a className="text-gray-400 hover:text-white text-sm" href="/ai-automation-solutions">AI & Automation Solutions</a></li>
                <li><a className="text-gray-400 hover:text-white text-sm" href="/web-developement">Website Development</a></li>
                <li><a className="text-gray-400 hover:text-white text-sm" href="/mobile-app-development">Mobile App Development</a></li>
                <li><a className="text-gray-400 hover:text-white text-sm" href="/qa-assurance-testing">Quality Assurance and Engineering</a></li>
                <li><a className="text-gray-400 hover:text-white text-sm" href="/devops-services">DevOps Services</a></li>
                <li><a className="text-gray-400 hover:text-white text-sm" href="/ui-ux-design">UI/UX Design</a></li>
              </ul>
            </div>

            {/* Third Column */}
            <div className='gap-8 max-w-[1280px] mx-auto mb-4'>
              <h3 className="font-medium ">Solutions</h3>
              <ul className="space-y-3">
                <li><a className="text-gray-400 hover:text-white text-sm" href="/project-management">Project Management</a></li>
                <li><a className="text-gray-400 hover:text-white text-sm" href="/crm">CRM</a></li>
                <li><a className="text-gray-400 hover:text-white text-sm" href="/client-onborading">Client Onboarding</a></li>
                <li><a className="text-gray-400 hover:text-white text-sm" href="/website-builder">Website Builder</a></li>
                <li><a className="text-gray-400 hover:text-white text-sm" href="/chat">Chat</a></li>
                <li><a className="text-gray-400 hover:text-white text-sm" href="/funnel">Funnel</a></li>
              </ul>
            </div>

            {/* Fourth Column */}
            <div className='gap-8 max-w-[1280px] mx-auto'>
              <h3 className="font-medium mb-4">About</h3>
              <ul className="space-y-3">
                <li><a className="text-gray-400 hover:text-white text-sm" href="#">Clients</a></li>
                <li><a className="text-gray-400 hover:text-white text-sm" href="#">Join Us</a></li>
                <li><a className="text-gray-400 hover:text-white text-sm" href="/about">About Us</a></li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 AgenciFlow. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a className="text-gray-400 hover:text-white text-sm" href="#">Contact Us</a>
              <a className="text-gray-400 hover:text-white text-sm" href="/about">About Us</a>
              <a className="text-gray-400 hover:text-white text-sm" href="#">Privacy Policy</a>
              <a className="text-gray-400 hover:text-white text-sm" href="#">Terms of Service</a>
            </div>
          </div>
    </footer>
  );
}

export default Footer;

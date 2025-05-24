import { useEffect, useState } from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from 'react-icons/fa6';
import { LuPhoneCall } from 'react-icons/lu';
import { SiGmail } from 'react-icons/si';

function Footer() {
  const now = new Date();
  const formattedTime = now.toLocaleTimeString({
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
  const [time, setTime] = useState(formattedTime);
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString({
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setTime(formattedTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="mb-8 max-w-[1280px] mx-auto px-2 sm:px-8">
      <div className="text-center text-[16vw] xl:text-[204.8px] text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-violet-600">
        {' '}
        {time}
      </div>
      <div className="flex justify-center items-center gap-10 leading-none mt-8">
        <a href="#">
          <FaLinkedinIn className="text-2xl" />
        </a>
        <a href="#">
          <SiGmail className="text-2xl" />
        </a>
        <a href="#">
        <LuPhoneCall className="text-2xl" />
        </a>
        <a href="#">
          <FaXTwitter className="text-2xl" />
        </a>
        <a href="#">
          <FaFacebookF className="text-2xl" />
        </a>
        <a href="#">
          <FaInstagram className="text-2xl" />
        </a>
      </div>
      <p className="text-center mt-4 text-lg font-semibold tracking-[2px]">
        ©2025
        <a
          href="#"
          className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-violet-600 hover:text-blue-800 transition-colors"
        >
          {' '}
          QuoraSphere{' '}
        </a>
        | All Rights Reserved
      </p>
    </div>
  );
}
export default Footer;

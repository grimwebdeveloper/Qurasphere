import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from 'react-icons/fa6';
import { LuPhoneCall } from 'react-icons/lu';
import { SiGmail } from 'react-icons/si';

function OurTeams() {
  const members = [{}, {}, {}, {}];
  return (
    <div className="px-2 sm:px-8 lg:flex gap-8 max-w-[1280px] mx-auto mb-16">
      <div className="text-center lg:text-left mb-6 lg:min-w-[310px]">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">
          Our Teams
        </h2>
        <p className="text-lg mt-2 italic text-zinc-600 shiny-text">
          Your vision, Our Code
        </p>
      </div>
      <div className="cards flex flex-wrap gap-8 justify-center">
        {members.map((member, index) => (
          <div
            key={index}
            className="text-center shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] rounded-lg w-[359px] lg:w-[275px] flex-grow"
          >
            <div className="overflow-hidden relative bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 transition-all duration-300 rounded-t-lg">
              <img src="public\member.png" alt="" />
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 left-0 w-full h-full -z-10 scale-110 translate-x-5 translate-y-20"
              >
                <path
                  fill="#0F62FE"
                  d="M55.8,-34C68.1,-11,70.9,15.8,60,32C49.1,48.3,24.5,54,-1.5,54.9C-27.5,55.8,-55,51.7,-66.2,35.3C-77.4,18.9,-72.2,-9.9,-58.5,-33.9C-44.7,-57.8,-22.4,-76.9,-0.3,-76.7C21.8,-76.5,43.5,-57.1,55.8,-34Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
            <h3 className="mt-8 text-2xl">Member Name</h3>
            <p className="mt-1 italic text-zinc-600">
              Position (Web Developer)
            </p>
            <div
              id="member-social-links"
              className="flex justify-center gap-6 items-center my-8"
            >
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
          </div>
        ))}
      </div>
    </div>
  );
}
export default OurTeams;

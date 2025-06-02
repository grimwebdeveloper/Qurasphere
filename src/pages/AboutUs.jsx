// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaXTwitter,
// } from 'react-icons/fa6';
// import { LuPhoneCall } from 'react-icons/lu';
// import { SiGmail } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';
import { SiGmail } from 'react-icons/si';
import { FaXTwitter } from 'react-icons/fa6';

function AboutUs() {
  const members = [
    {
      name: 'Tauhid Raza',
      position: 'Frontend Developer',
      image: 'tauhid.jpg',
      social: {
        linkedin: 'https://www.linkedin.com/in/mdtauhidraza/',
        gmail: 'mailto:tauhidr507@gmail.com',
        twitter: 'https://x.com/md_raza71452',
      },
    },
    {
      name: 'Syed Saqlain Ahmad',
      position: 'Full Stack Developer',
      image: 'saqlain.png',
      social: {
        linkedin: 'https://www.linkedin.com/in/syed-saqlain-ahmad-a87b691b2',
        gmail: 'syedsaqlainahmad07@gmail.com',
        twitter: '',
      },
    },
    {
      name: 'Shadab Majid',
      position: 'Full Stack Drupal Developer',
      image: 'shadab.jpg',
      social: {
        linkedin: 'http://www.linkedin.com/in/shadab-majid-7b068b244',
        gmail: 'mailto:shadabmajid13@gmail.com',
        twitter: '',
      },
    },
    {
      name: 'Minhaj Alam',
      position: 'Web Developer',
      image: 'minhaj.jpg',
      social: {
        linkedin: 'https://www.linkedin.com/in/minhaj-alam875/',
        gmail: 'mailto:myminhajalam392@gmail.com',
        twitter: 'minhaj.jpg',
      },
    },
    {
      name: 'Tajdar',
      position: 'Frontend Developer',
      image: 'tajdar.jpg',
      social: {
        linkedin: '',
        gmail: 'mailto:mdtajdaradil001@gmail.com',
        twitter: '',
      },
    },
    {
      name: 'Sharif Iqbal Jamil',
      position: 'Frontend Developer',
      image: 'sarif.png',
      social: {
        linkedin: 'https://www.linkedin.com/in/grimwebdeveloper/',
        gmail: 'mailto:grimwebdeveloper@gmail.com',
        twitter: 'https://x.com/grimdeveloper',
      },
    },
  ];
  return (
    <>
      <div className="max-w-screen-xl px-8 mx-auto py-16 lg:py-24">
        <h2 className="text-4xl lg:text-5xl font-semibold mb-4">About Us</h2>
        <div className="text-2xl lg:text-3xl font-medium text-blue-600 mb-6">
          Meet the minds behind the magic
        </div>
        <p className="text-lg lg:text-xl text-zinc-600 max-w-3xl">
          We're dedicated to delivering innovative web solutions with a modern
          approach. Our expert team is committed to achieving successful results
          for our clients.
        </p>
      </div>

      <section className="max-w-screen-xl px-8 mx-auto pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {members.map((member, index) => (
            <div
              key={index}
              className="text-center shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] rounded-lg w-[313px] lg:w-[275px] flex-grow"
            >
              <div className="w-full min-h-[300px] overflow-hidden relative rounded-t-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-110 transition-all duration-1000"
                />
                {/* <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 left-0 w-full h-full -z-10 scale-110 translate-x-5 translate-y-20"
                >
                  <path
                    fill="#0F62FE"
                    d="M55.8,-34C68.1,-11,70.9,15.8,60,32C49.1,48.3,24.5,54,-1.5,54.9C-27.5,55.8,-55,51.7,-66.2,35.3C-77.4,18.9,-72.2,-9.9,-58.5,-33.9C-44.7,-57.8,-22.4,-76.9,-0.3,-76.7C21.8,-76.5,43.5,-57.1,55.8,-34Z"
                    transform="translate(100 100)"
                  />
                </svg> */}
              </div>
              <h3 className="mt-8 text-2xl font-semibold">{member.name}</h3>
              <p className="mt-1 not-italic font-semibold text-zinc-600">
                {member.position}
              </p>
              <div
                id="member-social-links"
                className="flex justify-center gap-6 items-center my-8"
              >
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    title="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn className="text-2xl hover:transition delay-150 duration-300 ease-in-out hover:scale-125" />
                  </a>
                )}
                {member.social.gmail && (
                  <a
                    href={member.social.gmail}
                    title="Gmail"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiGmail className="text-2xl hover:transition delay-150 duration-300 ease-in-out hover:scale-125" />
                  </a>
                )}
                {member.social.twitter && (
                  <a
                    href={member.social.twitter}
                    title="Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaXTwitter className="text-2xl hover:transition delay-150 duration-300 ease-in-out hover:scale-125" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactForm />
    </>
  );
}
export default AboutUs;

import React from 'react';
import { IoMdMail } from 'react-icons/io';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

function ContactForm() {
  return (
    <>
      <section className="p-8 flex flex-col gap-16 lg:flex-row max-w-screen-xl mx-auto">
        <div className="lg:w-1/2">
          <h2 className="font-semibold text-4xl max-w-[608px] lg:w-auto">
            Let's Collaborate To Make Something Exceptional
          </h2>
          <ul className="mt-4">
            <li className="flex items-center gap-2 mb-2">
              <FaPhoneAlt className="text-lg text-blue-600" />
              <a
                href="tel:+916204663143"
                className="hover:text-blue-600 transition-colors"
              >
                +91 6204663143
              </a>
            </li>
            <li className="flex items-center gap-2 mb-2">
              <IoMdMail className="text-lg text-blue-600" />
              <a
                href="mailto:qurasphere@gmail.com"
                className="hover:text-blue-600 transition-colors"
              >
                qurasphere@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-lg text-blue-600" />
              <span className="hover:text-blue-600 transition-colors">
                Bariyatu, Ranchi
              </span>
            </li>
          </ul>
        </div>
        <div className="pb-16 lg:w-1/2">
          <form className="flex flex-col justify-center gap-8">
            <div className="flex flex-col justify-center gap-2">
              <label className="pl-1" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your full name"
                className="bg-transparent border-b-[1px] border-zinc-600 focus:outline-none focus:border-blue-600 pl-1 pb-1"
                required
              />
            </div>
            <div className="flex flex-col justify-center gap-2">
              <label className="pl-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                className="bg-transparent border-b-[1px] border-zinc-600 focus:outline-none focus:border-blue-600 pl-1 pb-1"
                required
              />
            </div>
            <div className="flex flex-col justify-center gap-2">
              <label className="pl-1" htmlFor="number">
                Mobile Number
              </label>
              <input
                type="number"
                name="number"
                id="number"
                placeholder="Enter your mobile number"
                className="bg-transparent border-b-[1px] border-zinc-600 focus:outline-none focus:border-blue-600 pl-1 pb-1"
                required
              />
            </div>
            <div className="flex flex-col justify-center gap-2">
              <label className="pl-1" htmlFor="message">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Tell us what you need"
                className="bg-transparent border-b-[1px] border-zinc-600 focus:outline-none focus:border-blue-600 pl-1 pb-1"
                rows={1}
              />
            </div>
            <button
              type="button"
              className="ml-1 mt-16 lg:mt-8 outline outline-1 outline-blue-600 px-6 py-3 rounded-full relative font-semibold hover:text-white hover:outline-none btn-effect md:ml-0"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default ContactForm;

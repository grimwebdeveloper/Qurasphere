import React from 'react'
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

function ContactForm() {
    return (
        <section className="bg-gray-300 flex items-center justify-center min-h-screen">
            <div className="bg-gray-100 rounded-2xl shadow-md p-10 flex flex-col md:flex-row gap-10 max-w-5xl w-full">

                <div className="flex justify-center w-full pt-5 mt-5">
                    <div className="max-w-[400px]">
                        <h1 className="text-3xl mb-4 font-semibold">
                            <span className="text-gray-800">Let's Collaborate To</span><br />
                            <span className="text-gray-700">Make Something</span><br />
                            <span className="text-gray-700">Exceptional</span>
                        </h1>
                        <div className="flex items-center space-x-3 mb-2">
                            <a href="mailto:solvent****@gmail.com" className="text-blue-600 text-lg">
                                <IoMdMail />
                            </a>
                            <p className="text-gray-700">qurasphere@gmail.com</p>
                        </div>

                        <div className="flex items-center space-x-3">
                            <a href="tel:+1234567890" className="text-blue-600 text-lg">
                                <FaPhoneAlt />
                            </a>
                            <p className="text-gray-700">6204663143</p>
                        </div>

                    </div>
                </div>

                {/* <!-- Right Form --> */}
                <div className="flex justify-center w-full">
                    <form className="p-8 bg-white rounded-xl w-full max-w-[400px]">
                        <div className="mt-4">
                            <label for="username" className="block mb-1">Full Name</label>
                            <input className="bg-gray-200 p-2 rounded-md w-full text-sm focus:border-primary"
                                placeholder="Enter your name" type="text" name="username" id="username" />
                        </div>

                        <div className="mt-4">
                            <label for="email" className="block mb-1">Email</label>
                            <input type="text" name="email"
                                className="bg-gray-200 p-2 rounded-md w-full text-sm focus:border-primary"
                                placeholder="Enter your email" />
                        </div>

                        <div className="mt-4">
                            <label for="mobile-no" className="block mb-1">Phone Number</label>
                            <input type="text" className="bg-gray-200 p-2 rounded-md w-full text-sm focus:border-primary"
                                name="mobile-no" placeholder="Enter your phone no." />
                        </div>

                        <div className="mt-4">
                            <label for="message" className="block mb-1">Message</label>
                            <textarea rows="3" name="message"
                                className="bg-gray-200 p-2 rounded-md w-full text-sm focus:border-primary"
                                placeholder="Tell us about your project. What problems can we help you solve?"></textarea>
                        </div>

                        <button type="submit" className="py-1.5 px-5 mt-8 mb-4 bg-blue-600 text-white rounded-xl w-full">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactForm
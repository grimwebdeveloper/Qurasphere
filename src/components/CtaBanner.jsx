import React from 'react'
import { Link } from 'react-router-dom';


export default function CtaBanner() {
    return (
        <section id="contact" class="bg-gray-300 py-10 text-center px-2 mb-6">
            <h2 class="text-3xl font-bold mb-4">Ready to Build Your API?</h2>
            <p class="mb-6">Let’s turn your requirements into a powerful, scalable, and secure API.</p>
            <div>
            <Link
          to="/contact-us"
          className="inline-block outline outline-1 outline-blue-600 px-6 py-3 rounded-full relative font-semibold hover:text-white hover:outline-none btn-effect z-[1]"
        >
          Request a Consultation
        </Link>
        </div>
        </section>
    )
}

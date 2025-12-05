"use client";

import { Inter } from "next/font/google";
import { FaCheckCircle, FaChevronRight } from "react-icons/fa"; 

const inter = Inter({ subsets: ["latin"] });

export default function ContactPage() {
  return (
    <div className={`${inter.className} w-full flex justify-center py-16 px-6`}>
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10">

        {/* LEFT CARD */}
        <div className="bg-black text-white rounded-2xl p-10">
          <h2 className="text-xl font-semibold">
            Partner with Us for Comprehensive <br /> IT & Digital Marketing Solutions
          </h2>

          <p className="text-gray-300 mt-4 leading-relaxed">
            Get in touch & let’s start crafting solutions that drive your business forward.
          </p>

          <p className="mt-6 font-semibold">
            Email us at :{" "}
            <span className="text-gray-200 font-normal">business@netrootstech.com</span>
          </p>

          {/* BENEFITS */}
          <div className="mt-10">
            <h3 className="font-bold text-lg">Your Benefits</h3>

            <div className="grid grid-cols-2 gap-y-4 mt-4 text-gray-300">
              {[
                "Client-oriented",
                "Results-Driven",
                "Independent",
                "Problem-Solving",
                "Competent",
                "Transparent",
              ].map((item, idx) => (
                <p key={idx} className="flex items-center gap-3">
                  <FaCheckCircle className="text-teal-400" />
                  <span className="text-gray-200 font-normal">{item}</span>
                </p>
              ))}
            </div>
          </div>

          {/* WHAT'S NEXT */}
          <div className="mt-10">
            <h3 className="font-bold text-lg">What’s Next?</h3>

            <ul className="mt-4 space-y-4 text-gray-300">
              {[
                "1. We schedule a call at your convenience.",
                "2. We do a discovery & consulting meeting.",
                "3. We prepare a proposal."
              ].map((text, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <FaChevronRight className="text-teal-400 mt-1" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div>
          <p className="text-teal-400 font-bold">
            {'// '} <span className="text-black">Contact Us</span>
          </p>

          <h1 className="text-4xl font-semibold mt-2">
            Get your <span className="text-blue-600">Free Quote</span> Today!
          </h1>

          <form className="mt-10 space-y-6">

            {/* NAME + EMAIL */}
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block mb-2 text-sm text-black">Your Name</label>
                <input
                  type="text"
                  placeholder="Eg. John Doe"
                  className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-black">Your Email</label>
                <input
                  type="email"
                  placeholder="Example@gmail.com"
                  className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none"
                />
              </div>
            </div>

            {/* PHONE + SERVICE */}
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block mb-2 text-sm text-black">Phone</label>
                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-black">Service</label>
                <select className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none">
                  <option>Select Service</option>
                  <option>Web Development</option>
                  <option>Digital Marketing</option>
                  <option>Branding</option>
                  <option>SEO Optimization</option>
                  <option>Graphic Design</option>
                  <option>Content Writing</option>
                  <option>Social Media Management</option>
                  <option>Mobile App Development</option>
                  <option>UI/UX Design</option>
                  <option>eCommerce Solutions</option>
                  <option>Email Marketing</option>
                  <option>Video Production</option>
                  <option>Pay Per Click (PPC)</option>
                  <option>Influencer Marketing</option>
                  <option>Market Research</option>
                  <option>Cloud Solutions</option>
                  <option>IT Consulting</option>
                  <option>Web Hosting</option>
                  <option>Cybersecurity</option>
                  <option>Analytics & Reporting</option>
                </select>
              </div>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block mb-2 text-sm text-black">Your Message</label>
              <textarea
                rows={5}
                placeholder="Enter here..."
                className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none"
              ></textarea>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-blue-700 transition"
            >
              Submit
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}

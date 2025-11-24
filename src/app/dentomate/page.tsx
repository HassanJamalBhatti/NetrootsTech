'use client';
import React from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';
import { useEffect, useState } from 'react';
import Image from "next/image";

const modules = [
  { 
    title: "Real Estate Management", 
    description: "NRT-PMS allows you to perform real estate management effectively! The software is cloud-based and comes with customizable utilities." 
  },
  { 
    title: "Housing Society Management", 
    description: "Housing society management is now at your fingertips! NRT-PMS enables you to organize and manage all housing-related activities efficiently." 
  },
  { 
    title: "Commercial Building Management", 
    description: "NRT-PMS is a comprehensive property management solution that makes managing commercial buildings easy and efficient." 
  },
  { 
    title: "Construction Management", 
    description: "NetRoots adds a new feature to NRT-PMS for seamless construction management. The system handles all construction-related activities effectively." 
  }
];


export default function ForsaHR() {
  const [loadingPage, setLoadingPage] = useState(true);

  // Simulate page loading
  useEffect(() => {
    const timer = setTimeout(() => setLoadingPage(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loadingPage) {
    return (
      <div className="fixed inset-0 flex flex-col justify-center items-center bg-white z-50" aria-busy="true">
        <div className="relative w-32 h-32 mb-8">
          <Image
            src="/logo.png"
            alt="Logo"
            fill
            className="object-contain"
          />
        </div>
        <div className="dots-loader flex space-x-2">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <style jsx>{`
          .dot {
            width: 1.5rem;
            height: 1.5rem;
            background-color: #3498db;
            border-radius: 50%;
            display: inline-block;
            animation: blink 1.5s infinite;
          }
          .dot:nth-child(1) { animation-delay: 0s; }
          .dot:nth-child(2) { animation-delay: 0.3s; }
          .dot:nth-child(3) { animation-delay: 0.6s; }
          @keyframes blink {
            0%, 20% { opacity: 0; }
            50% { opacity: 1; }
            100% { opacity: 0; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="font-sans">
      <Navbar/>
      {/* Hero Section with texture and animation */}
      <section
        className="relative text-white mt-20 text-center py-20 px-4 overflow-hidden"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/diamond-upholstery.png'), linear-gradient(to right, #1e3a8a, #2563eb)`,
          backgroundBlendMode: "overlay",
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="relative z-10 transform hover:scale-[1.02] transition-transform duration-700 ease-out">
          <h1 className="text-5xl font-bold mb-4 tracking-wide">NRT CRM</h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            NetRoots CRM offers expert support and advanced 
            features, helping businesses streamline operations and grow cost-effectively.
          </p>
          <button onClick={() => window.location.replace("/contectus")} className="bg-white text-blue-800 font-semibold px-6 py-3 rounded-md hover:scale-105 hover:bg-gray-100 transition-all duration-300 shadow-md">
            Schedule a Free Consultation
          </button>
        </div>

        {/* Optional gradient overlay for extra texture depth */}
        <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply"></div>
      </section>

      {/* Content Section 1 */}
      <section className="py-16 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 transform hover:-translate-y-1 transition-transform duration-500">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            Benefits of Real Estate Management Software by NetRoots Technologies
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
           Are you struggling to manage your real estate properties efficiently?
            If manual processes are slowing you down, NetRoots Technologies offers
             NRT-PMS a cloud-based property management solution designed to streamline
              operations. 
          </p>
            <p className="text-gray-700 leading-relaxed">
                Our software provides you with the decisive edge to:
            </p>
            <ul className="text-gray-700 ml-2  leading-relaxed list-none space-y-2">
          
            <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 01.083 1.32l-.083.094-8 8a1 1 0 01-1.32.083l-.094-.083-4-4a1 1 0 011.32-1.497l.094.083L8 12.584l7.293-7.291a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Automate and manage buildings, apartments, commercial towers, and housing societies.
            </li>
            <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 01.083 1.32l-.083.094-8 8a1 1 0 01-1.32.083l-.094-.083-4-4a1 1 0 011.32-1.497l.094.083L8 12.584l7.293-7.291a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Handle accounts, finance, leasing, and tenant management with ease.
            </li>
            <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 01.083 1.32l-.083.094-8 8a1 1 0 01-1.32.083l-.094-.083-4-4a1 1 0 011.32-1.497l.094.083L8 12.584l7.293-7.291a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Improve productivity with integrated customer support and daily operational tracking.
            </li>
            <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 01.083 1.32l-.083.094-8 8a1 1 0 01-1.32.083l-.094-.083-4-4a1 1 0 011.32-1.497l.094.083L8 12.584l7.293-7.291a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Ensure seamless access to property data anytime, anywhere.
            </li>
            </ul>
          <p className="text-gray-700 mt-2 leading-relaxed">
            With NRT-PMS, real estate management becomes hassle-free, allowing you to focus on growing your business!
            </p>
        </div>

        <div className="md:w-1/2">
          <Image
            src="/products/aimserp.jpg"
            alt="aims erp"
            width={700}     
            height={400}    
            className="rounded-md shadow-lg w-170 h-80 transform hover:scale-105 transition-transform duration-500"
          />

        </div>
      </section>

      {/* Content Section 2 */}
      <section className="py-16 px-6 md:px-20 flex flex-col md:flex-row-reverse items-center gap-10 bg-gray-50">
        <div className="md:w-1/2 transform hover:-translate-y-1 transition-transform duration-500">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            Our Managed IT Services Let You Focus on What Matters
          </h2>
          <p className="text-gray-700 text-justify leading-relaxed">
            Are IT challenges slowing you down? NetRoots Technologies offers advanced
             solutions to streamline your operations, ensuring your technology
              enhances efficiency rather than drains resources. Our expert IT
               services free you from managing complex systems so you can focus 
               on business growth. With our tailored
             solutions, businesses can optimize 
             performance and stay ahead in a competitive market.
Let us h    andle the IT complexities while you
 concent    rate on what truly matters—expanding your business and achieving success.
          </p>
        </div>

        <div className="md:w-1/2">
          <Image
            src="/products/aimserp2.jpg"
            alt="aimserp"
             width={700}     
            height={400}  
            className="rounded-md shadow-lg w-170 h-80 transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>

      {/* Modules Section */}
      <section className="relative min-h-screen bg-white px-6 py-16 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
          {/* Left (Sticky + Vertically Centered) Section */}
          <div className="md:w-1/2 md:sticky md:top-0 flex items-center justify-center min-h-screen relative 
                          bg-gradient-to-br from-blue-900 via-blue-800 to-white 
                          bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] bg-repeat bg-opacity-10">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-gray-600 to-gray-300"></div>

            <div className="text-left relative z-10">
              <h2 className="text-3xl ml-10 mr-10 md:text-4xl font-extrabold text-gray-900 leading-tight">
                Effortless Problem Solving Through Innovation <br />
                <span className="text-blue-600 italic underline">NRT PMS Modules</span>
              </h2>
            </div>
          </div>

          {/* Right (Scrollable) Section */}
          <div className="md:w-1/2 max-h-[80vh] pt-5 pb-5 min-h-screen overflow-y-auto pr-4 space-y-8 custom-scroll">
            {modules.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 transform hover:translate-x-2 transition-transform duration-300"
              >
                {/* Radio-style bullet */}
                <div className="relative mt-2 w-4 h-4 rounded-full border-2 border-blue-600 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>

                <div className="pl-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ContactUs */}
      <ContactUs/>
      {/* Footer */}
      <Footer/>
    </div>
  );
}

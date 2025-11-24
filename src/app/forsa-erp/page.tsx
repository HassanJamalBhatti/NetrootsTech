'use client';
import React from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';
import { useEffect, useState } from 'react';
import Image from "next/image";

const modules = [
  { 
    title: "Sales Management System", 
    description: "Double your sales with Forsa Enterprise Resource Planner! The system adds more earnings by adding more sales." 
  },
  { 
    title: "Procurement Management System", 
    description: "Improve procurement with centralized information, build a procurement policy with a strong feedback facility." 
  },
  { 
    title: "Inventory Management System", 
    description: "The best inventory management system capable to track stock, sales and purchasing, payment gateways, and reports." 
  },
  { 
    title: "Accounts & Finance Management System", 
    description: "Forsa ERP adds excitement to accounts management ensuring the automaticity of accounts by improving cash procedures." 
  },
  { 
    title: "Production Management System", 
    description: "Simplifying business operations! Forsa ERP streamlines your operators, reduces complexity, and improves production." 
  },
  { 
    title: "HR Software For Small Businesses", 
    description: "ERP software providers with an integrated database, connect the database control operations from a single node." 
  },
  { 
    title: "Customer Relationship Management System", 
    description: "Building strong and accurate CRM systems, it will make your CRM better to get the best response from the customers!" 
  },
  { 
    title: "Supply Chain Management System", 
    description: "Creating job scheduling by streamlining supply chain management! It adds effectiveness to the supply chain." 
  },
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
            <Image src="/logo.png" alt="Logo" fill className="object-contain" />
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
          <h1 className="text-5xl font-bold mb-4 tracking-wide">FORSA ERP</h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Why manage multiple disconnected systems, when you can have an all-in-one ERP solution for a fraction of the cost? ForsaERP provides a comprehensive, cloud-based platform to streamline your entire business efficiently.
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
            ForsaERP: Leading the Way in Integrated ERP Solutions
          </h2>
            <div className="w-full">
            <p className="text-gray-700 leading-relaxed mb-4 max-w-3xl mx-auto text-justify">
                ForsaERP is a leading cloud-based Enterprise Resource Planning (ERP) solution designed
                to integrate, streamline, and centralize various business processes. It offers comprehensive
                modules that support back-office operations, finance, procurement, payroll, and forecasting,
                enabling businesses to evaluate performance, control finances, generate reports, and manage
                procurement efficiently. By implementing ForsaERP, organizations can reduce errors, enhance
                efficiency, and improve decision-making capabilities, leading to cost reduction and increased
                productivity.
            </p>
            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-justify">
                The system allows for effective management and monitoring of critical business processes from
                a single platform, facilitating improvements across areas such as customer relations,
                inventory management, sales, and production. ForsaERP provides customizable ERP consultancy,
                development, and product support services suitable for industries of all sizes, from small
                enterprises to large corporations. Its integrated system ensures timely procurement by
                enabling precise ordering, thereby boosting purchasing efficiency. Overall, ForsaERP empowers
                businesses to control complex operations through a unified interface, enhancing operational
                efficiency and effectiveness.
            </p>
            </div>



        </div>

        <div className="md:w-1/2">
          <div className="relative w-full h-80">
            <Image
              src="/products/forsaerp1.jpg"
              alt="Forsa Erp"
              fill
              className="rounded-md shadow-lg object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>

        </div>
      </section>

      {/* Content Section 2 */}
      <section className="py-16 px-6 md:px-20 flex flex-col md:flex-row-reverse items-center gap-10 bg-gray-50">
        <div className="md:w-1/2 transform hover:-translate-y-1 transition-transform duration-500">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            Optimize Your Business with ForsaERP’s Integrated ERP Solutions
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            Are you struggling with inefficiencies instead 
            of focusing on business growth? If your operations 
            are disorganized and resources are being drained rather 
            than optimized, ForsaERP can get you back on track. A fully 
            integrated ERP system can provide the decisive edge to streamline 
            processes, enhance productivity, and centralize your business operations—all
             from a single platform.
          </p>
        </div>

        <div className="md:w-1/2">
          <div className="relative w-full h-80">
            <Image
              src="/products/forsaerp2.jpg"
              alt="Forsa Erp"
              fill
              className="rounded-md shadow-lg object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>

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
                Transform Your Business with ForsaERP&apos;s <br />
                <span className="text-blue-600 italic underline">Comprehensive ERP Modules</span>
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

'use client';
import Link from "next/link";
import Image from "next/image";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';
import { useEffect, useState } from 'react';

export default function CoreProducts() {
      const [loadingPage, setLoadingPage] = useState(true);
    
      // Simulate page loading
      useEffect(() => {
        const timer = setTimeout(() => setLoadingPage(false), 2000);
        return () => clearTimeout(timer);
      }, []);
    
      const products = [
    {
      title: "FORSA ERP",
      description:
        "ForsaERP is a leading cloud-based Enterprise Resource Planning (ERP) solution designed to integrate, streamline, and centralize various business processes. It offers comprehensive modules that support back-office operations, finance, procurement, payroll, and forecasting....",
      href: "/forsa-erp",
      logo: "/forsahr.png", // add your logo path here
    },
    {
      title: "FORSA HR",
      description:
        "Are you looking for an HRM software to reduce the time and energy consumed by the HR team and want to speed-up your work with smartness? Forsa HR is your ultimate choice for all your Human Resource Management and payroll services. Forsa HR is proudly initiating the comprehensive....",
      href: "/forsa-hr",
      logo: "/forsahr.png",
    },
    {
      title: "EDUCATUM",
      description:
        "Are you struggling to keep up with the evolving educational landscape? The industry is more competitive than ever, requiring institutions to adopt the latest technological advancements. NetRoots Technologies presents Educatum, the ultimate software solution....",
      href: "/educatum",
      logo: "/educatum.png",
    },
    {
      title: "DENTOMATE",
      description:
        "We talked with you. We worked with you. And then we created DentoMate: A simple, sleek, and practical electronic health system for dental clinics. DentoMate delivers a user-friendly interface to help you automate and manage administrative tasks so that you can focus on your patients....",
      href: "/dentomate",
      logo: "/forsahr.png",
    },
    {
      title: "NRT CRM",
      description:
        "Are you struggling to manage customer relationships and marketing efforts efficiently? If manual processes are slowing you down, NetRoots Technologies offers NetRoots CRM a cloud-based customer relationship management solution designed to streamline operations....",
      href: "/nrt-crm",
      logo: "/forsahr.png",
    },
    {
      title: "NRT PMS",
      description:
        "Are you struggling to manage your real estate properties efficiently? If manual processes are slowing you down, NetRoots Technologies offers NRT PMS a cloud-based property management solution designed to streamline operations....",
      href: "/aims-erp",
      logo: "/educatum.png",
    },
  ];
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
    <main>
      <Navbar/>
    <section className="bg-gradient-to-b mt-20 from-blue-50 to-white py-16 px-6 sm:px-12 md:px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
          Our Core Products
        </h2>
        <p className="text-lg text-gray-600 uppercase tracking-widest">
          Delivering smart digital solutions for your business success
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {products.map(({ title, description, href, logo }) => (
        <Link
        key={title}
        href={href}
        className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between border border-transparent
                    transform transition-all duration-500 ease-in-out
                    hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:border-blue-400 hover:bg-blue-50
                    focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2"
        aria-label={`Learn more about ${title}`}
        >
        <div className="flex flex-col items-center text-center">
            {logo && (
            <div className="mb-4 flex justify-center items-center w-24 h-24 bg-blue-100 rounded-full p-4 transition-all duration-500 ease-in-out group-hover:bg-blue-200">
                <Image
                src={logo}
                alt={`${title} logo`}
                width={64}
                height={64}
                className="object-contain transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
            </div>
            )}
            <h3 className="font-bold text-xl mb-2 text-blue-700">{title}</h3>
            <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
        </div>
        <span
            className="text-sm text-blue-600 mt-5 inline-block font-semibold hover:underline"
            aria-hidden="true"
        >
            Learn more
        </span>
        </Link>

        ))}
      </div>
    </section>
    {/* ContactUs */}
        <ContactUs />
    {/* Footer */}
        <Footer />
    </main>
  );
}

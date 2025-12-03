"use client";

import { useEffect, useState } from 'react';
import dynamic from "next/dynamic";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';
import Image from "next/image";

const MapSection = dynamic(() => import('../components/MapSection'), { ssr: false });

export default function ContactUsPage() {
  const [loadingPage, setLoadingPage] = useState(true);

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
    <div className="min-h-screen">
      <Navbar />

      {/* Page Header */}
      <header className="relative mt-20 flex flex-col items-center justify-center h-60 md:h-64 text-black text-center px-4 overflow-hidden">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold animate-typing">
          Get in Touch with Us
        </h1>
        {/* Additional Info */}
        <div className="mt-4 text-center space-y-2">
          <p className="text-base sm:text-lg font-medium">We’re here to help</p>
          <p className="text-sm sm:text-md">
            Email us:{" "}
            <a
              href="mailto:business@netrootstech.com"
              className="text-blue-600 underline break-all"
            >
              business@netrootstech.com
            </a>
          </p>
          <p className="text-sm sm:text-md font-semibold">
            Schedule a free consultation
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-30 animate-glow"></div>
        <style jsx>{`
          @keyframes typing { 0% { width: 0; opacity: 0; } 50% { opacity: 1; } 100% { width: 100%; opacity: 1; } }
          .animate-typing { overflow: hidden; white-space: nowrap; border-right: 3px solid #3498db; display: inline-block; animation: typing 2s steps(25) forwards, blink 0.7s step-end infinite; }
          @keyframes blink { 0%, 50%, 100% { border-color: #3498db; } 25%, 75% { border-color: transparent; } }
          @keyframes glow { 0% { background-position: -100% 0; } 50% { background-position: 100% 0; } 100% { background-position: -100% 0; } }
          .animate-glow { background-size: 200% 100%; animation: glow 4s linear infinite; }
        `}</style>
      </header>

      {/* Contact Section */}
      <main className="px-4 sm:px-8 md:px-20 py-8 space-y-16">
        <MapSection />
        <ContactUs />
      </main>

      <Footer />
    </div>
  );
}

"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
export default function GetStart() {
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
    <div>
      <Navbar />

      {/* HEADER / HERO SECTION */}
      <header className="bg-gradient-to-r mt-40 text-black  px-0 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Started with Our Services</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Choose the perfect plan that fits your needs and start optimizing your website today. 
          Our packages are designed to improve performance, enhance user experience, and boost your online presence.
        </p>
      </header>

      <main className="px-6 py-1  bg-gradient-to-b pb-10 from-[#f8faff] to-[#e7ebf5] min-h-screen">
        {/* PRICING PLANS SECTION */}
        <section className="mt-20">
          <h2 className="text-3xl md:text-4xl  font-bold text-center text-gray-800 mb-12">
            Choose Your Plan
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Package 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-2xl transition-all">
              <h3 className="text-2xl font-semibold mb-4">Package 1</h3>
              <p className="text-gray-500 mb-2 font-medium">Monthly Pricing Plan</p>
              <p className="text-4xl font-bold mb-6">$_ _ _ _</p>
              <ul className="text-gray-700 space-y-2 mb-6 text-left">
                <li>✔ Website Performance Monitoring</li>
                <li>✔ Content Updates & Optimization</li>
                <li>✔ Security Checks & Updates</li>
                <li>✔ User Experience (UX) Enhancements</li>
                <li>✔ Mobile Optimization</li>
                <li>✔ Bug Fixes & Support</li>
                <li>✔ SEO Adjustments</li>
                <li>✔ Speed & Performance Optimization</li>
                <li>✔ Backup & Disaster Recovery</li>
                <li>✔ Conversion Rate Optimization (CRO)</li>
              </ul>
              <Link
                href="/contectus"
                className="block bg-gray-800 text-white text-center py-3 rounded-md font-medium hover:bg-gray-700"
              >
                Sign Up
              </Link>
            </div>

            {/* Package 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-2xl transition-all">
              <h3 className="text-2xl font-semibold mb-4">Package 2</h3>
              <p className="text-gray-500 mb-2 font-medium">Yearly Pricing Plan</p>
              <p className="text-4xl font-bold mb-6">$_ _ _ _</p>
              <ul className="text-gray-700 space-y-2 mb-6 text-left">
                <li>✔ Website Redesign/Overhaul</li>
                <li>✔ Analytics & Reporting</li>
                <li>✔ Long-term Strategy Planning</li>
                <li>✔ SEO & Content Strategy Review</li>
                <li>✔ Feature Integration</li>
                <li>✔ Website Hosting & Server Review</li>
                <li>✔ UI/UX Modernization</li>
                <li>✔ Security & Compliance Audit</li>
                <li>✔ Scalability & Performance Enhancement</li>
                <li>✔ Custom Development & New Features</li>
              </ul>
              <Link
                href="/contectus"
                className="block bg-gray-800 text-white text-center py-3 rounded-md font-medium hover:bg-gray-700"
              >
                Sign Up
              </Link>
            </div>

            {/* Package 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-2xl transition-all">
              <h3 className="text-2xl font-semibold mb-4">Package 3</h3>
              <p className="text-gray-500 mb-2 font-medium">Custom Pricing Plan</p>
              <p className="text-4xl font-bold mb-6">$_ _ _ _</p>
              <ul className="text-gray-700 space-y-2 mb-6 text-left">
                <li>✔ Content Updates & Optimization</li>
                <li>✔ Security Checks & Updates</li>
                <li>✔ User Experience (UX) Enhancements</li>
                <li>✔ Mobile Optimization</li>
                <li>✔ Bug Fixes & Support</li>
                <li>✔ SEO Adjustments</li>
                <li>✔ Website Redesign/Overhaul</li>
                <li>✔ Analytics & Reporting</li>
                <li>✔ Long-term Strategy Planning</li>
                <li>✔ Feature Integration</li>
              </ul>
              <Link
                href="/contectus"
                className="block bg-gray-800 text-white text-center py-3 rounded-md font-medium hover:bg-gray-700"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

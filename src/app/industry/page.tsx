"use client";
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';
import React from "react";
import Image from "next/image";

interface IndustryCardProps {
  title: string;
  imgSrc: string;
  description: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ title, imgSrc, description }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-4 flex flex-col">
    <Image
      src={imgSrc}
      alt={title}
      width={400}
      height={250}
      className="object-cover w-full h-48"
    />
    <div className="p-4 flex flex-col flex-1">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 flex-1">{description}</p>
    </div>
  </div>
);

export default function IndustriesPage() {
  const [loadingPage, setLoadingPage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoadingPage(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const industries = [
    { title: "Industry & Manufacturing", imgSrc: "/Industry.jpg", description: "Innovative solutions to optimize production and operations." },
    { title: "Transportation & Logistics", imgSrc: "/Logistics.jpg", description: "Efficient logistics and transport solutions for your business." },
    { title: "Healthcare", imgSrc: "/health.jpg", description: "Advanced healthcare technology to improve patient care." },
    { title: "Banks & Insurance", imgSrc: "/bank.jpg", description: "Secure and reliable banking and insurance services." },
    { title: "Retail & E-commerce", imgSrc: "/retail.jpg", description: "Transforming retail experiences with innovative tech." },
    { title: "Education & eLearning", imgSrc: "/education.jpg", description: "Empowering learning through modern digital solutions." },
    { title: "Telecom & IT Services", imgSrc: "/telecom.jpg", description: "Connecting people and businesses through IT excellence." },
  ];

  if (loadingPage) {
    return (
      <div className="fixed inset-0 flex flex-col justify-center items-center bg-white z-50" aria-busy="true">
        <Image src="/logo.png" alt="Logo" width={128} height={128} className="mb-8 object-contain" />
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
      <div className="min-h-screen mt-20 bg-gray-50 py-12 px-6 md:px-16">
        <Navbar />
        <div className="mb-12 text-center">
          <h2 className="text-lg uppercase text-gray-500 mb-2 tracking-wide">INDUSTRIES WE SERVE</h2>
          <h1 className="text-3xl lg:text-4xl font-bold mb-8">Explore Netroots Technologies by Industry</h1>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <IndustryCard
              key={i}
              title={industry.title}
              imgSrc={industry.imgSrc}
              description={industry.description}
            />
          ))}
        </div>
      </div>
      <ContactUs />
      <Footer />
    </main>
  );
}

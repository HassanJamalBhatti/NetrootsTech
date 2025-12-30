"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Intelligent Automation & AI Solutions",
    description:
      "Leverage AI, machine learning, and smart automation to optimize operations and enhance customer experiences.",
    image: "/services/ai.png",
    link: "/contact",
  },
  {
    id: 2,
    title: "Data Intelligence & Predictive Analytics",
    description:
      "Transform your data into actionable insights with real-time analytics and predictive modeling.",
    image: "/services/data.png",
    link: "/contact",
  },
  {
    id: 3,
    title: "Cloud Architecture & Next-Gen Infrastructure",
    description:
      "Scalable, secure, and flexible cloud solutions to accelerate digital transformation.",
    image: "/services/cloud.png",
    link: "/contact",
  },
  {
    id: 4,
    title: "Talent-as-a-Service (Staff Augmentation)",
    description:
      "Access top-tier developers, designers, and digital specialists on demand.",
    image: "/services/talent.png",
    link: "/contact",
  },
  {
    id: 5,
    title: "Product Innovation & MVP Launch",
    description:
      "From ideation to launch, we help bring your product vision to life.",
    image: "/services/product.png",
    link: "/contact",
  },
  {
    id: 6,
    title: "Growth Marketing & Digital Acceleration",
    description:
      "Performance-driven marketing strategies designed to maximize ROI.",
    image: "/services/marketing.png",
    link: "/contact",
  },
  {
    id: 7,
    title: "Web3 & App Experiences",
    description:
      "Custom websites, mobile apps, and immersive digital experiences.",
    image: "/services/web3.png",
    link: "/contact",
  },
  {
    id: 8,
    title: "DevOps & Continuous Delivery",
    description:
      "CI/CD pipelines, automation, and cloud-native workflows.",
    image: "/services/devops.png",
    link: "/contact",
  },
];

export default function ServicesPage() {
  const [loadingPage, setLoadingPage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoadingPage(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loadingPage) {
    return (
      <div className="fixed inset-0 flex flex-col justify-center items-center bg-white z-50">
        <Image src="/logo.png" alt="Logo" width={120} height={120} />
        <p className="mt-4 text-gray-500">Loading services...</p>
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      <main className="min-h-screen mt-20 px-6 md:px-16 py-16 bg-gradient-to-br from-[#f4f7ff] to-[#e7ebf5]">
        {/* Header */}
        <section className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Services & Solutions
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg mt-4">
            Elevate your brand with scalable, secure, and future-ready digital solutions.
          </p>
        </section>

        {/* Services Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto mb-20">
          {services.map(({ id, title, description, image, link }) => (
            <div
              key={id}
              className="group relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="w-20 h-20 mb-6 relative">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {description}
              </p>

              {/* Get Started Button */}
              <div className="flex justify-end">
                <Link
                  href={`${link}?service=${encodeURIComponent(title)}`}
                  className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-all shadow-md"
                >
                  Get Started
                </Link>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </section>
      </main>

      <ContactUs />
      <Footer />
    </div>
  );
}

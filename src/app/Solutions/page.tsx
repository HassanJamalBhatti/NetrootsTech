"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { 
  FaBrain, 
  FaChartLine, 
  FaCloud, 
  FaUsersCog, 
  FaRocket, 
  FaLaptopCode,
  FaCube, 
  FaCogs
} from "react-icons/fa";
import type { ReactElement } from "react";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: ReactElement;
  link: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Intelligent Automation & AI Solutions",
    description:
      "Leverage AI, machine learning, and smart automation to optimize operations and enhance customer experiences.",
    icon: <FaBrain size={22} />,
    link: "/contact",
  },
  {
    id: 2,
    title: "Data Intelligence & Predictive Analytics",
    description:
      "Transform your data into actionable insights with real-time analytics, dashboards, and predictive modeling.",
    icon: <FaChartLine size={22} />,
    link: "/contact",
  },
  {
    id: 3,
    title: "Cloud Architecture & Next-Gen Infrastructure",
    description:
      "Scalable, secure, and flexible cloud solutions to power modern businesses and accelerate digital transformation.",
    icon: <FaCloud size={22} />,
    link: "/contact",
  },
  {
    id: 4,
    title: "Talent-as-a-Service (Staff Augmentation)",
    description:
      "Access top-tier tech talent on demand. Scale your team with skilled developers, designers, and digital specialists.",
    icon: <FaUsersCog size={22} />,
    link: "/contact",
  },
  {
    id: 5,
    title: "Product Innovation & MVP Launch",
    description:
      "From ideation to launch, we help bring your product vision to life with agile development and rapid MVP testing.",
    icon: <FaRocket size={22} />,
    link: "/contact",
  },
  {
    id: 6,
    title: "Growth Marketing & Digital Acceleration",
    description:
      "Data-driven marketing strategies, performance campaigns, and brand amplification to maximize ROI.",
    icon: <FaLaptopCode size={22} />,
    link: "/contact",
  },
  {
    id: 7,
    title: "Web3 & App Experiences",
    description:
      "Custom websites, mobile apps, and immersive digital experiences designed for engagement, retention, and business impact.",
    icon: <FaCube size={22} />,
    link: "/contact",
  },
  {
    id: 8,
    title: "DevOps & Continuous Delivery",
    description:
      "Streamline your software development pipelines with CI/CD, cloud-native infrastructure, and automated workflows.",
    icon: <FaCogs size={22} />,
    link: "/contact",
  },
];

export default function ServicesPage() {
  const [loadingPage, setLoadingPage] = useState(true);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoadingPage(false), 1500);
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
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      <main className="min-h-screen py-12 px-6 mt-20 md:px-16 bg-gradient-to-b from-[#f8faff] to-[#e7ebf5]">

        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-800">
            Services & Solutions
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Elevate your brand with our proven digital solutions crafted for performance, design, and growth.
          </p>
        </section>

        {/* Services Grid */}
        <section className="mb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map(({ id, title, description, icon, link }) => {
            const isActive = hoveredId === id;
            return (
              <div
                key={id}
                onMouseEnter={() => setHoveredId(id)}
                onMouseLeave={() => setHoveredId(null)}
                className="flex flex-col gap-4 bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-500"
              >
                <div className={`w-14 h-14 flex items-center justify-center rounded-xl text-white
                  ${isActive ? "bg-gradient-to-r from-blue-600 to-blue-500" : "bg-gradient-to-r from-blue-500 to-blue-400"}`}>
                  {icon}
                </div>

                <h3 className={`font-semibold text-lg md:text-xl ${isActive ? "text-blue-700" : "text-gray-800"}`}>
                  {title}
                </h3>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed flex-1">
                  {description}
                </p>
                {/* UPDATED BUTTON */}
                <div className="flex justify-end mt-auto">
                {/* <hr className="border-t border-gray-200 absolute inset-x-0 top-1/2 transform -translate-y-1/2" /> */}
                  <Link
                    href={`${link}?service=${encodeURIComponent(title)}`}
                    className="bg-blue-600 text-white px-4 py-1.5 rounded-md text-sm font-medium hover:bg-blue-700 transition-all shadow-sm hover:shadow-md"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            );
          })}
        </section>

      </main>

      <ContactUs />
      <Footer />
    </div>
  );
}


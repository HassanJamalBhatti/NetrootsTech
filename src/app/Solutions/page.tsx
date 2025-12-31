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
  highlight: string; // New field for bottom black section
  subtext: string;   // New field for bottom black section
}

const services: Service[] = [
  {
    id: 1,
    title: "Intelligent Automation & AI Solutions",
    description:
      "Leverage AI, machine learning, and smart automation to optimize operations and enhance customer experiences.",
    icon: <FaBrain size={22} />,
    link: "/contact",
    highlight: "Smart Automation",
    subtext: "AI-driven solutions to streamline processes and boost efficiency.",
  },
  {
    id: 2,
    title: "Data Intelligence & Predictive Analytics",
    description:
      "Transform your data into actionable insights with real-time analytics, dashboards, and predictive modeling.",
    icon: <FaChartLine size={22} />,
    link: "/contact",
    highlight: "Predictive Insights",
    subtext: "Turn raw data into actionable intelligence for better business decisions.",
  },
  {
    id: 3,
    title: "Cloud Architecture & Next-Gen Infrastructure",
    description:
      "Scalable, secure, and flexible cloud solutions to power modern businesses and accelerate digital transformation.",
    icon: <FaCloud size={22} />,
    link: "/contact",
    highlight: "Cloud Solutions",
    subtext: "Robust and scalable cloud architecture tailored to your business needs.",
  },
  {
    id: 4,
    title: "Talent-as-a-Service (Staff Augmentation)",
    description:
      "Access top-tier tech talent on demand. Scale your team with skilled developers, designers, and digital specialists.",
    icon: <FaUsersCog size={22} />,
    link: "/contact",
    highlight: "On-Demand Talent",
    subtext: "Hire skilled professionals instantly to boost your project capabilities.",
  },
  {
    id: 5,
    title: "Product Innovation & MVP Launch",
    description:
      "From ideation to launch, we help bring your product vision to life with agile development and rapid MVP testing.",
    icon: <FaRocket size={22} />,
    link: "/contact",
    highlight: "Rapid MVP",
    subtext: "Accelerate product development and test ideas quickly in the market.",
  },
  {
    id: 6,
    title: "Growth Marketing & Digital Acceleration",
    description:
      "Data-driven marketing strategies, performance campaigns, and brand amplification to maximize ROI.",
    icon: <FaLaptopCode size={22} />,
    link: "/contact",
    highlight: "Performance Marketing",
    subtext: "Boost ROI with targeted campaigns and strategic digital growth.",
  },
  {
    id: 7,
    title: "Web3 & App Experiences",
    description:
      "Custom websites, mobile apps, and immersive digital experiences designed for engagement, retention, and business impact.",
    icon: <FaCube size={22} />,
    link: "/contact",
    highlight: "Immersive Experiences",
    subtext: "Create next-gen web and mobile experiences that engage users.",
  },
  {
    id: 8,
    title: "DevOps & Continuous Delivery",
    description:
      "Streamline your software development pipelines with CI/CD, cloud-native infrastructure, and automated workflows.",
    icon: <FaCogs size={22} />,
    link: "/contact",
    highlight: "Efficient DevOps",
    subtext: "Automate and optimize software delivery pipelines for faster releases.",
  },
];

export default function ServicesPage() {
  const [loadingPage, setLoadingPage] = useState(true);

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
          {services.map(({ id, title, description, icon, link, highlight, subtext }) => (
            <div
              key={id}
              className="rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* ================= TOP WHITE PART ================= */}
              <div className="p-6 bg-white">
                {/* Header with icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="flex items-center gap-2 text-sm font-medium text-blue-700">
                    {icon} {title.split(" ")[0]}
                  </span>
                  <span className="text-sm text-gray-500">Services {'>'}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800 leading-snug mb-3">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {description}
                </p>

                {/* Price + Button */}
                <div className="flex items-center justify-between">
                  <div>
                  </div>

                  <Link
                    href={`${link}?service=${encodeURIComponent(title)}`}
                    className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
              {/* ================= BOTTOM BLUE PART ================= */}
              <div className="relative bg-blue-600 text-white px-6 py-8">
                <p className="text-sm font-medium mb-2 opacity-90">{highlight}</p>
                <p className="text-xs text-blue-100 max-w-[85%]">{subtext}</p>

                {/* Wave SVG */}
                <svg
                  className="absolute right-4 bottom-4 opacity-70"
                  width="120"
                  height="60"
                  viewBox="0 0 120 60"
                  fill="none"
                >
                  <path
                    d="M0 30C20 10 40 50 60 30C80 10 100 50 120 30"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="60" cy="30" r="4" fill="white" />
                </svg>
              </div>
            </div>
          ))}
        </section>

      </main>

      <ContactUs />
      <Footer />
    </div>
  );
}

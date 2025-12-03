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
    link: "/Solutions/ai-automation",
  },
  {
    id: 2,
    title: "Data Intelligence & Predictive Analytics",
    description:
      "Transform your data into actionable insights with real-time analytics, dashboards, and predictive modeling.",
    icon: <FaChartLine size={22} />,
    link: "/Solutions/data-intelligence",
  },
  {
    id: 3,
    title: "Cloud Architecture & Next-Gen Infrastructure",
    description:
      "Scalable, secure, and flexible cloud solutions to power modern businesses and accelerate digital transformation.",
    icon: <FaCloud size={22} />,
    link: "/Solutions/cloud-architecture",
  },
  {
    id: 4,
    title: "Talent-as-a-Service (Staff Augmentation)",
    description:
      "Access top-tier tech talent on demand. Scale your team with skilled developers, designers, and digital specialists.",
    icon: <FaUsersCog size={22} />,
    link: "/Solutions/staff-augmentation",
  },
  {
    id: 5,
    title: "Product Innovation & MVP Launch",
    description:
      "From ideation to launch, we help bring your product vision to life with agile development and rapid MVP testing.",
    icon: <FaRocket size={22} />,
    link: "/Solutions/mvp-launch",
  },
  {
    id: 6,
    title: "Growth Marketing & Digital Acceleration",
    description:
      "Data-driven marketing strategies, performance campaigns, and brand amplification to maximize ROI.",
    icon: <FaLaptopCode size={22} />,
    link: "/Solutions/growth-marketing",
  },
  {
    id: 7,
    title: "Web3 & App Experiences",
    description:
      "Custom websites, mobile apps, and immersive digital experiences designed for engagement, retention, and business impact.",
    icon: <FaCube size={22} />,
    link: "/Solutions/web3-apps",
  },
  {
    id: 8,
    title: "DevOps & Continuous Delivery",
    description:
      "Streamline your software development pipelines with CI/CD, cloud-native infrastructure, and automated workflows.",
    icon: <FaCogs size={22} />,
    link: "/Solutions/devops-cd",
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

      <main className="min-h-screen py-12 px-6 mt-20 md:px-16 bg-gradient-to-b from-[#f8faff] to-[#e7ebf5]">

        {/* Header */}
        <section className="text-center mb-16 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-800">
            Services & Solutions
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Elevate your brand with our proven digital solutions crafted for performance, design, and growth.
          </p>
        </section>

        {/* Services Grid */}
        <section className="mb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map(({ id, title, description, icon, link }) => {
            const isActive = hoveredId === id;
            return (
              <Link
                key={id}
                href={link}
                onMouseEnter={() => setHoveredId(id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`flex flex-col gap-3 bg-white rounded-xl p-6 shadow-md transition-all duration-300 cursor-pointer
                  ${isActive
                    ? "border border-blue-600 border-b-4 border-b-blue-800 shadow-lg scale-105"
                    : "border border-transparent hover:shadow-lg hover:scale-105"
                  }`}
              >
                <div className={`rounded-lg p-3 w-12 h-12 flex items-center justify-center transition-all duration-300
                  ${isActive ? "bg-blue-700 text-white" : "bg-blue-600 text-white"}`}
                >
                  {icon}
                </div>

                <h3 className={`font-semibold text-lg transition-all duration-300
                  ${isActive ? "text-blue-700" : "text-gray-800"}`}>
                  {title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {description}
                </p>
              </Link>
            );
          })}
        </section>

        {/* Why Choose Us Section */}
        <section className="mt-20 flex flex-col lg:flex-row items-center gap-10 animate-fadeInSlow max-w-7xl mx-auto">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-800 border-l-4 border-gray-800 pl-4">
              Why choose services from Netroots Technologies?
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Netroots Technologies, we craft solutions that align with your business vision.
              Our experienced professionals deliver measurable impact, ensuring your brand thrives
              in the fast-paced digital landscape.
            </p>
            <button className="bg-gray-800 text-white px-8 py-3 rounded-md font-medium hover:bg-gray-700 transition-all shadow-md hover:shadow-lg">
              Get Started
            </button>
          </div>

          <div className="lg:w-1/2">
            <div className="relative rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <Image
                src="/selution/code.jpg"
                alt="Coding screen"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Contact Section */}
      <ContactUs />

      {/* Footer */}
      <Footer />
    </div>
  );
}

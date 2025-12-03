"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  FaBrain, 
  FaChartLine, 
  FaCloud, 
} from "react-icons/fa";

// Define service type
interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactElement; // ✅ Fixed type
  link: string;
}

// Service data
const services: ServiceItem[] = [
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
  
];

export default function Services() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const router = useRouter();

  const handleClick = (link: string) => {
    router.push(link);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-14">
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-4">
        <div>
          <p className="font-semibold">
            <span className="text-teal-500">{'//'}</span> Our Services
          </p>
          <h2 className="text-3xl font-bold leading-snug">
            Services We Provide to <br />
            <span className="text-blue-600">Elevate Your Business</span>
          </h2>
        </div>

        <button
          onClick={() => router.push("/Solutions")}
          className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm hover:bg-blue-700 transition mx-auto sm:mx-0"
        >
          View All Services
        </button>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ id, title, description, icon, link }) => {
          const isActive = hoveredId === id;

          return (
            <div
              key={id}
              onMouseEnter={() => setHoveredId(id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => handleClick(link)}
              className={`flex flex-col gap-3 bg-white rounded-xl p-6 shadow-md transition-all duration-300 cursor-pointer
                ${isActive
                  ? "border border-blue-600 border-b-4 border-b-blue-800 shadow-lg scale-105"
                  : "border border-transparent hover:shadow-lg hover:scale-105"
                }`}
            >
              {/* Icon */}
              <div
                className={`rounded-lg p-3 w-12 h-12 flex items-center justify-center transition-all duration-300
                  ${isActive ? "bg-blue-700 text-white" : "bg-blue-600 text-white"}
                `}
              >
                {icon}
              </div>

              {/* Title */}
              <h3
                className={`font-semibold text-lg transition-all duration-300
                  ${isActive ? "text-blue-700" : "text-gray-800"}
                `}
              >
                {title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

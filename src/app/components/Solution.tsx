import React, { useState } from "react";
import { FaLaptopCode, FaMobileAlt, FaPencilRuler } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Website Development",
    description:
      "We build fast, modern, and scalable websites tailored for your business needs.",
    icon: <FaLaptopCode size={22} />,
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "We design and develop smooth, fully-featured apps for iOS & Android.",
    icon: <FaMobileAlt size={22} />,
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "We craft stunning modern interfaces that deliver a seamless user experience.",
    icon: <FaPencilRuler size={22} />,
  },
];

export default function Services() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

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

        <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm hover:bg-blue-700 transition mx-auto sm:mx-0">
          View All Services
        </button>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ id, title, description, icon }) => {
          const isActive = hoveredId === id;

          return (
            <div
              key={id}
              onMouseEnter={() => setHoveredId(id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`flex flex-col gap-3 bg-white rounded-xl p-6 shadow-md transition-all duration-300  
                ${
                  isActive
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

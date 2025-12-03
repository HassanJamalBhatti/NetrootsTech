import React, { useState } from "react";
import { 
  FaBrain, 
  FaChartLine, 
  FaCloud, 
  FaUsersCog, 
  FaRocket, 
  FaLaptopCode 
} from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "AI & Automation Solutions",
    description:
      "Build intelligent workflows, AI-driven apps, automation pipelines, and generative AI tools to accelerate your business.",
    icon: <FaBrain size={22} />,
  },
  {
    id: 2,
    title: "Data Analytics & Business Intelligence",
    description:
      "Turn raw data into insights with dashboards, predictive analytics, and real-time reporting systems.",
    icon: <FaChartLine size={22} />,
  },
  {
    id: 3,
    title: "Cloud Engineering & DevOps",
    description:
      "Cloud migration, scalable architecture, CI/CD pipelines, and end-to-end cloud-native development.",
    icon: <FaCloud size={22} />,
  },
  {
    id: 4,
    title: "Dedicated Teams & Staff Augmentation",
    description:
      "Scale your engineering capacity with vetted developers, designers, and project teams ready to join instantly.",
    icon: <FaUsersCog size={22} />,
  },
  {
    id: 5,
    title: "Product Development & MVP Launch",
    description:
      "From idea to launch — we design, build, and ship high-quality digital products and MVPs in record time.",
    icon: <FaRocket size={22} />,
  },
  {
    id: 6,
    title: "Digital Growth & Performance Marketing",
    description:
      "SEO, paid ads, brand identity, and full-funnel marketing strategies to grow your digital presence.",
    icon: <FaLaptopCode size={22} />,
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

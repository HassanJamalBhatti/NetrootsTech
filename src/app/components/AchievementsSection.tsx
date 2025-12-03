"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import CountUp from "react-countup";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function AchievementsSection() {
  const stats = [
    { value: 3000, label: "Successful Projects" },
    { value: 250, label: "Active Clients" },
    { value: 23, label: "Countries Supported" },
    { value: 15, label: "Years of Enablement Experience" },
  ];

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (isInView) setStartCount(true);
  }, [isInView]);

  return (
    <section
      ref={ref}
      className={`${inter.className} bg-[#f9f9f9] text-black py-20 px-6`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        {/* Left Side */}
        <div className="flex-1">
          <p className="tracking-wider font-semibold text-gray-900 mb-3 text-sm ">
            <span className="text-teal-600">{'// '}</span>
            Intelligent AI Solutions
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-black">
            NetRoots Technology <br /><span className="text-blue-600" >Achievements</span>
          </h2>
          <p className="text-gray-600 mb-3">
            We take pride in delivering AI driven solutions that empower businesses globally.
          </p>
          <p className="text-gray-600 mb-6">
            NetRoots Technology combines AI innovation with scalable digital strategies to drive growth and impact.
          </p>
          <button className="bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-600 transition-all duration-300">
            Get in Touch
          </button>
        </div>

        {/* Right Side Stats */}
        <div className="flex-1 grid grid-cols-1  sm:grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-blue-50 shadow-md rounded-2xl  p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl md:text-3xl text-blue-600 font-bold">
                {startCount ? <CountUp end={stat.value} duration={2} /> : 0}
                {stat.value > 100 ? "+" : "+"}
              </h3>
              <p className="mt-2 text-blue-500 text-center font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface StatsSectionProps {
  rating?: number;
  reviews?: number;
  trafficBoost?: number;
  satisfaction?: number;
  projects?: number;
}

export default function StatsSection({
  rating = 4.8,
  reviews = 1250,
  trafficBoost = 40,
  satisfaction = 98,
  projects = 100,
}: StatsSectionProps) {
  const [startCount, setStartCount] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) setStartCount(true);
  }, [inView]);

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<span key={i}>★</span>);
      } else if (i - rating < 1) {
        stars.push(<span key={i}>☆</span>);
      } else {
        stars.push(<span key={i}>☆</span>);
      }
    }
    return <div className="text-yellow-400">{stars}</div>;
  };

  return (
    <section ref={ref} className="w-full bg-blue-600 text-white shadow-lg">
      {/* Desktop Version */}
      <div className="hidden sm:grid grid-cols-5 gap-6 py-10 px-6 sm:px-20">
        {/* Google Reviews */}
        <div className="flex flex-col sm:flex-row justify-center items-center sm:border-r border-white gap-4 sm:gap-3">
          <a
            href="https://www.google.com/search?q=netroots-technologies"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-amber-50 text-black rounded-md px-4 py-3 w-full sm:w-auto hover:opacity-95 transition"
          >
            <div className="relative w-12 h-12 sm:w-12 sm:h-12">
              <Image src="/g.png" alt="Google" fill className="object-contain" />
            </div>
            <div className="leading-tight text-center sm:text-left">
              <div className="flex justify-center sm:justify-start items-center gap-2">
                <span className="text-2xl font-semibold">
                  {startCount && <CountUp start={0} end={rating} decimals={1} duration={1.5} />}
                </span>
                <div className="flex text-lg">{renderStars(rating)}</div>
              </div>
              <p className="text-sm mt-1 opacity-90">
                {startCount && <CountUp start={0} end={reviews} duration={1.5} separator="," />} Reviews
              </p>
            </div>
          </a>
        </div>

        {/* Traffic Boost */}
        <div className="flex flex-col justify-center items-center sm:border-r border-white text-center">
          <p className="text-3xl font-bold">
            {startCount && <CountUp start={0} end={trafficBoost} duration={1.5} />}% <span className="text-xl">Boost</span>
          </p>
          <p className="text-sm mt-1">In website traffic within 6 months</p>
        </div>

        {/* Customer Satisfaction */}
        <div className="flex flex-col justify-center items-center sm:border-r border-white text-center">
          <p className="text-3xl font-bold">
            {startCount && <CountUp start={0} end={satisfaction} duration={1.5} />}%
          </p>
          <p className="text-sm mt-1">Customer Satisfaction</p>
        </div>

        {/* Projects Completed */}
        <div className="flex flex-col justify-center items-center sm:border-r border-white text-center">
          <p className="text-3xl font-bold">
            {startCount && <CountUp start={0} end={projects} duration={1.5} />}+ <span className="text-xl">Projects</span>
          </p>
          <p className="text-sm mt-1">Completed Successfully</p>
        </div>

        {/* Support */}
        <div className="flex flex-col justify-center items-center text-center">
          <p className="text-3xl font-bold">24/7</p>
          <p className="text-sm mt-1">Support Available</p>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="sm:hidden px-6 py-8 space-y-6">
        {/* Google Reviews */}
        <a
          href="https://www.google.com/search?q=netroots-technologies"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-amber-50 text-black rounded-md px-4 py-3 hover:opacity-95 transition"
        >
          <div className="relative w-12 h-12">
            <Image src="/g.png" alt="Google" fill className="object-contain" />
          </div>
          <div className="leading-tight">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-semibold">
                {startCount && <CountUp start={0} end={rating} decimals={1} duration={1.5} />}
              </span>
              <div className="flex text-lg">{renderStars(rating)}</div>
            </div>
            <p className="text-sm mt-1 opacity-90">
              {startCount && <CountUp start={0} end={reviews} duration={1.5} separator="," />} Reviews
            </p>
          </div>
        </a>

        {/* Stats in stacked cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-500 rounded-md p-4 flex flex-col items-center">
            <p className="text-2xl font-bold">
              {startCount && <CountUp start={0} end={trafficBoost} duration={1.5} />}% <span className="text-sm">Boost</span>
            </p>
            <p className="text-xs text-center mt-1">In website traffic within 6 months</p>
          </div>

          <div className="bg-blue-500 rounded-md p-4 flex flex-col items-center">
            <p className="text-2xl font-bold">
              {startCount && <CountUp start={0} end={satisfaction} duration={1.5} />}%
            </p>
            <p className="text-xs text-center mt-1">Customer Satisfaction</p>
          </div>

          <div className="bg-blue-500 rounded-md p-4 flex flex-col items-center">
            <p className="text-2xl font-bold">
              {startCount && <CountUp start={0} end={projects} duration={1.5} />}+ <span className="text-sm">Projects</span>
            </p>
            <p className="text-xs text-center mt-1">Completed Successfully</p>
          </div>

          <div className="bg-blue-500 rounded-md p-4 flex flex-col items-center">
            <p className="text-2xl font-bold">24/7</p>
            <p className="text-xs text-center mt-1">Support Available</p>
          </div>
        </div>
      </div>
    </section>
  );
}

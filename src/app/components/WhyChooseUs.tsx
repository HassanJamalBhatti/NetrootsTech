import { FaDollarSign, FaUsers, FaHistory } from "react-icons/fa";
import Image from "next/image";
import { Inter } from "next/font/google";
import React from "react";

// Load Inter font
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function WhyChooseUs() {
  return (
    <section
      className={`bg-black text-white py-16 px-4 sm:px-8 lg:px-16 2xl:px-24 ${inter.className}`}
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-14 gap-6">
          <div>
            <p className="text-teal-400 font-medium mb-2 text-sm sm:text-base tracking-wide">
              {"//"} <span className="text-white">Why Choose Us</span>
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold leading-tight">
              Engagement Models
            </h2>
          </div>

          <button
            onClick={() => window.location.replace("/contectus")}
            className="bg-blue-600 text-white px-6 py-3 rounded-full text-base font-medium hover:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-300"
          >
            Get A Quote
          </button>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Image */}
          <div className="relative w-full h-60 sm:h-80 lg:h-[380px] xl:h-[430px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/team-meeting.jpg"
              alt="Team meeting"
              width={800}
              height={600}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>


          {/* Right Features */}
          <div className="space-y-10">
            <Feature
              number="01"
              icon={<FaDollarSign />}
              title="Fixed Price Projects"
              description="Our solutions are scalable and can grow with your business, ensuring that you get the most value out of your investment."
            />

            <Feature
              number="02"
              icon={<FaUsers />}
              title="Dedicated Team"
              description="We stay up-to-date with the latest technology trends and offer futuristic solutions that help you stay ahead of the competition."
            />

            <Feature
              number="03"
              icon={<FaHistory />}
              title="Offshore Development Centre"
              description="We specialize in serving a number of industries, such as healthcare, finance, or manufacturing, and offer custom solutions that meet your unique needs."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// -------------------- Reusable Component --------------------

interface FeatureProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

function Feature({ number, icon, title, description }: FeatureProps) {
  return (
    <div className="flex items-start gap-5">
      <div className="text-teal-400 font-bold text-2xl md:text-3xl">{number}.</div>

      <div className="flex flex-col space-y-2">
        <div className="text-3xl md:text-4xl ">{icon}</div>

        <h3 className="font-semibold text-lg md:text-xl">{title}</h3>

        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

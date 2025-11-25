import { FaDollarSign, FaUsers, FaTrophy, FaHistory } from "react-icons/fa";
import Image from "next/image";
import { Inter } from "next/font/google";

// Load Inter font
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function WhyChooseUs() {
  return (
    <section
      className={`bg-black text-white py-12 sm:py-16 px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48 ${inter.className}`}
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10 sm:mb-12 gap-6">
          <div>
            <p className="text-teal-500 font-medium mb-2 text-sm sm:text-base">
              {"//"} <span className="text-white">Why Choose Us</span>
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-4xl xl:text-4xl font-semibold leading-tight">
              Why Trust Us for <br />
              Your IT Needs?
            </h2>
          </div>
          <button className="bg-blue-600 text-white px-5 py-3 rounded-full text-sm sm:text-base md:text-lg font-medium hover:bg-blue-700 transition">
            Get A Quote
          </button>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Image */}
          <div className="relative rounded-xl overflow-hidden w-full h-56 sm:h-72 md:h-80 lg:h-[420px] xl:h-[450px] 2xl:h-[520px] shadow-lg">
            <Image
              src="/team-meeting.jpg"
              alt="Team high five"
              width={600}
              height={400}
              className="object-cover w-full h-full rounded-xl"
            />
          </div>

          {/* Right: Features */}
          <div className="space-y-10">
            <div className="grid sm:grid-cols-2 gap-8 lg:gap-10">
              <Feature
                icon={<FaDollarSign />}
                title="Affordable Price"
                description="We provide high-quality IT solutions at competitive rates."
              />
              <Feature
                icon={<FaUsers />}
                title="Professional Team"
                description="Our experts ensure every project meets the highest standards."
              />
              <Feature
                icon={<FaHistory />}
                title="18+ Years Experience"
                description="With years of experience, we deliver reliable and efficient IT services."
              />
              <Feature
                icon={<FaTrophy />}
                title="Award Winning"
                description="Recognized for excellence in delivering top-notch IT solutions."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Reusable Feature component with smaller icon & semibold title
function Feature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-start space-y-3">
      {/* Smaller Icon */}
      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl">{icon}</div>

      {/* Semi-bold Title */}
      <h3 className="font-semibold text-base sm:text-lg md:text-xl lg:text-xl">
        {title}
      </h3>

      <p className="text-gray-400 text-sm sm:text-base lg:text-lg">
        {description}
      </p>
    </div>
  );
}

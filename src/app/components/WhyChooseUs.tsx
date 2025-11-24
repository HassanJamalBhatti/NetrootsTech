import { FaDollarSign, FaUsers, FaTrophy, FaHistory } from "react-icons/fa";
import Image from "next/image";
import { Inter } from "next/font/google";

// Load Inter font
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function WhyChooseUs() {
  return (
    <section className={`bg-black text-white py-16 px-6 md:px-16 ${inter.className}`}>
      <div className="max-w-7xl mx-auto md:pl-8 md:mr-5 relative">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12 gap-6">
          <div>
            <p className="text-teal-500 font-medium mb-2">{'//'} <span className="text-white">Why Choose Us</span></p>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              Why Trust Us for <br />
              Your IT Needs?
            </h2>
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm sm:text-base font-medium hover:bg-blue-700 transition">
            Get A Quote
          </button>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative rounded-xl overflow-hidden w-full h-64 sm:h-80 md:h-full shadow-lg">
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
            <div className="grid sm:grid-cols-2 gap-8">
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

// Reusable Feature component
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
    <div className="flex flex-col md:ml-6 items-start space-y-3">
      <div className="text-4xl sm:text-5xl ">{icon}</div>
      <h3 className="font-semibold text-lg sm:text-xl">{title}</h3>
      <p className="text-gray-400 text-sm sm:text-base">{description}</p>
    </div>
  );
}

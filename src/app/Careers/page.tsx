'use client';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';
import Image from "next/image";
import { 
  FaClock, 
  FaUserFriends, 
  FaChartLine, 
  FaTrophy, 
  FaPlane, 
  FaGraduationCap, 
  FaHandsHelping, 
  FaHeart 
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const perks = [
  {
    icon: <FaClock className="text-blue-600 w-6 h-6 mb-3 mx-auto" />,
    title: "Flexible Work Hours",
    description:
      "Enjoy a healthy work-life balance with flexible schedules that suit your lifestyle.",
  },
  {
    icon: <FaUserFriends className="text-blue-600 w-6 h-6 mb-3 mx-auto" />,
    title: "Referral Program",
    description:
      "Earn rewards for referring talented individuals to join our team.",
  },
  {
    icon: <FaChartLine className="text-blue-600 w-6 h-6 mb-3 mx-auto" />,
    title: "Career Growth Opportunities",
    description:
      "Access to leadership training, skill development, and advancement opportunities.",
  },
  {
    icon: <FaTrophy className="text-blue-600 w-6 h-6 mb-3 mx-auto" />,
    title: "Performance Incentives",
    description:
      "Rewarding top performers with bonuses and other recognition for exceptional work.",
  },
  {
    icon: <FaPlane className="text-blue-600 w-6 h-6 mb-3 mx-auto" />,
    title: "Local & International Holidays",
    description:
      "Opportunities for local and international holidays, ensuring ample time to recharge.",
  },
  {
    icon: <FaGraduationCap className="text-blue-600 w-6 h-6 mb-3 mx-auto" />,
    title: "Training & Education",
    description:
      "Enhance your skills and knowledge through certifications, workshops, and continuous learning.",
  },
  {
    icon: <FaHandsHelping className="text-blue-600 w-6 h-6 mb-3 mx-auto" />,
    title: "Team Building Activities",
    description:
      "Regular team events, happy hours, and social activities to foster camaraderie and collaboration.",
  },
  {
    icon: <FaHeart className="text-blue-600 w-6 h-6 mb-3 mx-auto" />,
    title: "Employee Appreciation",
    description:
      "We believe in celebrating our team’s hard work through special events, awards, and recognition.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.15,
      when: "beforeChildren"
    }
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  hover: { scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.12)" },
};

export default function CareersPage() {
  const [loadingPage, setLoadingPage] = useState(true);

  // Simulate page loading
  useEffect(() => {
    const timer = setTimeout(() => setLoadingPage(false), 2000);
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
    <main className="bg-white text-gray-900 font-sans min-h-screen relative">
      <Navbar />

      {/* Page Content */}
      <div className="transition-opacity duration-500 opacity-100">
        {/* Header Section */}
        <section className="text-center py-16 mt-20 px-6 max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
            Start your journey
          </h1>
          <p className="text-sm md:text-base text-gray-600 mb-6">
            Join us! Become the Impact!
          </p>
          <button className="bg-blue-700 text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-blue-800 transition">
            Explore Open Positions
          </button>
        </section>

        {/* Image Section */}
        <section className="max-w-6xl mx-auto px-6">
          <Image
            src="/career-office.jpg"
            alt="Team having casual meeting"
            width={1200}      
            height={450}       
            className="rounded-lg shadow-md w-full object-cover max-h-[450px]"
          />
        </section>


        {/* Description Paragraph */}
        <section className="max-w-4xl mx-auto text-center px-6 mt-8">
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            At Netroots Technologies, we prioritize your well-being and mental peace. We believe a balanced, supportive environment leads to success for everyone. Join us for a fulfilling, stress-free career where you’re truly valued.
          </p>
        </section>

        {/* Perks Section */}
        <motion.section 
          className="max-w-6xl mx-auto px-6 mt-16 py-14 bg-blue-50 rounded-lg"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-10 text-center text-blue-900">
            Perks of Being a Part of Our Team
          </h2>

          <motion.div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {perks.map(({ icon, title, description }) => (
              <motion.div
                key={title}
                className="bg-white rounded-lg p-6 shadow-sm cursor-pointer text-center"
                variants={itemVariants}
                whileHover="hover"
                transition={{ type: "spring", stiffness: 300 }}
              >
                {icon}
                <h3 className="font-semibold mb-2 text-gray-900">{title}</h3>
                <p className="text-gray-700 text-sm">{description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom button */}
          <div className="text-center mt-12">
            <button className="bg-blue-700 text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-blue-800 transition">
              Explore Open Positions
            </button>
          </div>
        </motion.section>

        {/* Contact & Footer */}
        <ContactUs/>
        <Footer/>
      </div>
    </main>
  );
}

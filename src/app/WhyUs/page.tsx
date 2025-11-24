'use client';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';
import { FaLightbulb, FaBrain, FaTrophy, FaGlobe, FaCog, FaSmile } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Home() {
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
    <main className="font-sans text-gray-800">
        <Navbar/>
      {/* Hero Section */}
      <section className="text-center mt-30 y-12 px-6 bg-gray-50">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose <span className="text-indigo-700">Netroots Technologies?</span>
        </motion.h2>

        <motion.p
          className="text-gray-500 mt-2 uppercase tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Everyone has a story. Here is ours.
        </motion.p>

        <motion.p
          className="text-gray-600 mt-4 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          At Netroots Technologies, we’re committed to delivering top-notch IT solutions and digital marketing services that drive measurable success.
        </motion.p>

        <motion.div 
          className="mt-10 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <Image
            src="/office.jpg"
            alt="Office team"
            width={1200}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </section>

      {/* Description */}
      <section className="max-w-4xl mx-auto text-center px-6 mt-8">
        <motion.p
          className="text-gray-600 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          In a crowded market of IT businesses and consultancy firms, what sets us apart? 
          The answer is simple: we deliver more value for your time and investment than anyone else.
        </motion.p>
      </section>
      <hr className="border-t-2 border-gray-200 my-12 w-1/2 mx-auto" />


      {/* Features */}
      <section className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 py-16">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <div className="text-indigo-600 text-4xl mb-4">{feature.icon}</div>
            <h3 className="font-semibold text-lg text-gray-900">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </section>

      {/* Pre-Footer Text */}
      <section className="text-center max-w-4xl mx-auto px-6 mb-8">
        <motion.p
          className="text-gray-700 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          At Netroots Technologies, we’re committed to delivering top-notch IT solutions and digital marketing services that drive measurable success.
        </motion.p>
      </section>

      {/* Contact US */}
        <ContactUs/>
      {/* Footer */}
        <Footer/>
    </main>
  );
}

const features = [
  {
    icon: <FaLightbulb />,
    title: "Cost-Effective Solutions",
    description: "Providing top-tier services that deliver maximum value at competitive costs.",
  },
  {
    icon: <FaBrain />,
    title: "Advanced IT Solutions and Services",
    description: "Innovative and scalable tech solutions tailored to your business goals.",
  },
  {
    icon: <FaTrophy />,
    title: "Proven Success with Clients",
    description: "Trusted by clients worldwide with a track record of successful partnerships.",
  },
  {
    icon: <FaGlobe />,
    title: "Global Presence",
    description: "Serving clients around the globe with a distributed, experienced team.",
  },
  {
    icon: <FaCog />,
    title: "Proactive Support",
    description: "We anticipate challenges before they arise, keeping your systems running smoothly.",
  },
  {
    icon: <FaSmile />,
    title: "100% Customer Satisfaction",
    description: "Our commitment is to exceed expectations every single time.",
  },
];

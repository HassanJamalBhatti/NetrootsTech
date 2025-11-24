"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  image: string;
  alt: string;
  delay?: number;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, image, alt, delay = 0, link }) => (
  <Link href={link}>
    <div
      className={`relative overflow-hidden rounded-xl shadow-md transition-transform duration-500 cursor-pointer group hover:shadow-2xl hover:scale-[1.05]`}
      style={{ transitionDelay: `${delay * 100}ms` }}
    >
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover rounded-t-xl transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-500 ease-out flex items-end justify-center">
        <h3 className="text-lg font-semibold text-white mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center px-2 drop-shadow-lg">
          {title}
        </h3>
      </div>
      <div className="bg-white py-4 text-center rounded-b-xl">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
    </div>
  </Link>
);

export default function Services() {
  const [loadingPage, setLoadingPage] = useState(true);

  // Simulate page loading
  useEffect(() => {
    const timer = setTimeout(() => setLoadingPage(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    { title: "Rank #1 on Google", image: "/selution/google-rank.jpg", link: "/Solutions/google-rank" },
    { title: "Website Design & Development", image: "/selution/web-dev.jpg", link: "/Solutions/web-development" },
    { title: "Designing & Artistry", image: "/selution/design.jpg", link: "/Solutions/design" },
    { title: "Community Management", image: "/selution/community.jpg", link: "/Solutions/community" },
    { title: "Performance Marketing", image: "/selution/performance.jpg", link: "/Solutions/performance" },
    { title: "Brand Strategy Development", image: "/selution/strategy.jpg", link: "/Solutions/strategy" },
    { title: "E-commerce Solutions", image: "/selution/ecommerce.jpg", link: "/Solutions/ecommerce" },
    { title: "Content Marketing", image: "/selution/content.jpg", link: "/Solutions/content-marketing" },
    { title: "Email Marketing", image: "/selution/email.jpg", link: "/Solutions/email-marketing" },
    { title: "Social Media Management", image: "/selution/social.jpg", link: "/Solutions/social-media" },
    { title: "Reputation Management", image: "/selution/reputation.jpg", link: "/Solutions/reputation" },
    { title: "Analytics & Reporting", image: "/selution/analytics.jpg", link: "/Solutions/analytics" },
    { title: "Lead Generation", image: "/selution/lead.jpg", link: "/Solutions/lead-generation" },
    { title: "Content Creation", image: "/selution/content2.jpg", link: "/Solutions/content-creation" },
    { title: "Brand Consultancy", image: "/selution/consultancy.jpg", link: "/Solutions/consultancy" },
  ];

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
    <div>
      <Navbar />
      <main className="min-h-screen py-12 px-6 mt-20 md:px-16 bg-gradient-to-b from-[#f8faff] to-[#e7ebf5]">
        {/* Header */}
        <section className="text-center mb-16 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-800">
            Services & Solutions
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Elevate your brand with our proven digital solutions crafted for performance, design, and growth.
          </p>
        </section>

        {/* Services Grid */}
        <section className="mb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              image={service.image}
              alt={service.title}
              delay={index * 0.5}
              link={service.link}
            />
          ))}
        </section>

        {/* Why Choose Us Section */}
        <section className="mt-20 flex flex-col lg:flex-row items-center gap-10 animate-fadeInSlow">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-800 border-l-4 border-gray-800 pl-4">
              Why choose services from Netroots Technologies?
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Netroots Technologies, we craft solutions that align with your business vision.
              Our experienced professionals deliver measurable impact, ensuring your brand thrives
              in the fast-paced digital landscape.
            </p>
            <button className="bg-gray-800 text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition-all shadow-md hover:shadow-lg">
              Get Started
            </button>
          </div>

          <div className="lg:w-1/2">
            <div className="relative rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <Image
                src="/selution/code.jpg"
                alt="Coding screen"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Contact Section */}
      <ContactUs />

      {/* Footer */}
      <Footer />
    </div>
  );
}

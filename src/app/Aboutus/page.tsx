"use client";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaLightbulb, FaFlagCheckered, FaCogs, FaChartBar } from "react-icons/fa";


import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";


type TimelineItem = {
  title: string;
  text: string;
  image: string;
};

/* -------------------------------------------------------------------------- */
/* Reusable Timeline Component                                                */
/* -------------------------------------------------------------------------- */
const Timeline = ({
  items,
  dotRefs,
  activeIndex,
  prefix,
}: {
  items: TimelineItem[];
  dotRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  activeIndex: number | null;
  prefix: string; // "company" | "digital"
}) => {
  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Center line – hidden on mobile */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="hidden md:block absolute top-0 left-1/2 w-px bg-blue-500 -translate-x-1/2 origin-top h-full"
      ></motion.div>


      <div className="space-y-24">
        {items.map((item, i) => {
          const isRight = i % 2 === 1;
          const dataIdx = `${prefix}-${i}`;

          return (
            <div
              key={i}
              className={`relative flex flex-col md:flex-row ${
                isRight ? "md:flex-row-reverse" : ""
              } md:items-center md:justify-between`}
            >
              {/* ---------- CONTENT ---------- */}
              <motion.div
                initial={{ opacity: 0, x: isRight ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.8 }}
                className={`md:w-1/2 ${isRight ? "md:pl-12" : "md:pr-12"} text-center md:text-left`}
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-700 max-w-md mx-auto md:mx-0 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>

              {/* ---------- DOT ---------- */}
              <div
                ref={(el) => {
                  dotRefs.current[i] = el;
                }}
                data-index={dataIdx}
                className={`absolute top-0 w-5 h-5 rounded-full border-4 border-white shadow-lg transition-all duration-500
                  ${activeIndex === i ? "bg-blue-500 scale-125" : "bg-gray-300"}
                  left-1/2 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 md:-mt-2
                `}
              />


              {/* ---------- IMAGE ---------- */}
              <motion.div
                initial={{ opacity: 0, x: isRight ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.8 }}
                className={`md:w-1/2 mt-6 md:mt-0 ${isRight ? "md:pr-12" : "md:pl-12"} flex justify-center`}
              >
                <div className="rounded-lg overflow-hidden shadow-lg max-w-sm w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={230}
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* Main Timeline Page                                                         */
/* -------------------------------------------------------------------------- */
export default function TimelinePage() {
  const [loadingPage, setLoadingPage] = useState(true);
  const [activeCompanyIndex, setActiveCompanyIndex] = useState<number | null>(null);
  const [activeDigitalIndex, setActiveDigitalIndex] = useState<number | null>(null);

  const companyDotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const digitalDotRefs = useRef<(HTMLDivElement | null)[]>([]);

  /* ---- Simulate Page Loading ---- */
  useEffect(() => {
    const timer = setTimeout(() => setLoadingPage(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  /* ---- Intersection Observers ---- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idxStr = entry.target.getAttribute("data-index");
            if (idxStr?.startsWith("company-")) {
              const idx = Number(idxStr.split("-")[1]);
              setActiveCompanyIndex(idx);
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    companyDotRefs.current.forEach((dot) => dot && observer.observe(dot));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idxStr = entry.target.getAttribute("data-index");
            if (idxStr?.startsWith("digital-")) {
              const idx = Number(idxStr.split("-")[1]);
              setActiveDigitalIndex(idx);
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    digitalDotRefs.current.forEach((dot) => dot && observer.observe(dot));
    return () => observer.disconnect();
  }, []);

  /* ---- Timeline Data ---- */
  const companyTimeline: TimelineItem[] = [
    { title: "Established in Dublin", text: "Netroots started its journey in 2010 from Dublin by opening a research development center. We are a digital marketing company that provides software development, data management, and e-commerce services.", image: "/images/dublin.jpg" },
    { title: "Opened Research & Development Office in Lahore", text: "In 2016, Netroots opened its offices in Lahore to expand its business. We offer a Multi-Channel Experience and Engagement Marketing Platform, enabling hundreds of leading brands to drive engagement and increase revenue.", image: "/images/lahore.jpg" },
    { title: "Opened Office in Pennsylvania", text: "Netroots opened its branches in Pennsylvania in 2018-19 to expand business sales in the US market. We provided a comprehensive and integrated platform comprised of industry-leading solutions for companies.", image: "/images/pensalvania.jpg" },
    { title: "Joined hands with Custom Software Ireland", text: "Netroots joined hands with Ireland-based company custom software in 2017, ensuring a seamless marketing solution to all the clients we provide our services.", image: "/images/join.jpg" },
    { title: "Joint Venture with Zaitech", text: "Zaitech is an innovative software Development Company based in Ireland. Netroots started working with Zaitech in 2021 as a sales partner in business. We believe in working together for better outcomes.", image: "/images/joint.jpg" },
  ];

  const digitalMarketingTimeline: TimelineItem[] = [
    { title: "2015: Digital Marketing Services", text: "Recognizing the growing need for a digital presence, Netroots expanded its services to include digital marketing, helping clients enhance their online visibility and engagement.", image: "/images/dm.jpg" },
    { title: "2016: Expansion into Multi-Channel Marketing", text: "We began offering multi-channel marketing solutions, helping clients engage with customers across various platforms such as social media, search engines, and email, to drive targeted traffic and improve conversion rates.", image: "/images/dm1.jpg" },
    { title: "2018: Launch of Full-Service Digital Marketing Agency", text: "With the growth of our capabilities, Netroots evolved into a 360° digital marketing agency, providing end-to-end solutions such as SEO, SEM, social media management, content creation, and influencer marketing to clients worldwide.", image: "/images/dm2.jpg" },
    { title: "2020: AI-Driven Marketing Solutions", text: "To stay ahead of the curve, Netroots integrated artificial intelligence and machine learning into our marketing strategies, providing data-driven insights and personalized experiences to clients.", image: "/images/dm3.jpg" },
    { title: "2023: Advanced Data Analytics for Marketing Optimization", text: "With the increasing importance of data, we launched advanced data analytics services to help our clients measure, track, and optimize their marketing campaigns for maximum return on investment (ROI).", image: "/images/dm4.jpg" },
  ];

if (loadingPage) {
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-white z-50" aria-busy="true">
      <Image
        src="/logo.png"
        alt="Logo"
        width={128}     // corresponds to w-32 (32 * 4px = 128px)
        height={128}    // corresponds to h-32
        className="mb-8 object-contain"
      />
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
      <div className="min-h-screen bg-white p-6 sm:p-10 md:p-20 font-sans text-gray-900">
        <div className="max-w-6xl mt-10 mx-auto">
          {/* Header */}
          <header className="text-center mb-20 px-4">
            <motion.h1
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
            >
              Empowering Businesses with IT Excellence & 360° Digital Marketing Solutions
            </motion.h1>
            <p className="mt-6 max-w-3xl mx-auto text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
              Over the past decade, our company has evolved from a small Ireland-based startup into a globally renowned IT development, consultancy, and 360° digital marketing agency, delivering innovative solutions across a vast and diverse market landscape.
            </p>
          </header>

          {/* Company Timeline */}
          <section className="mb-32 px-4">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-16 text-center">Company Growth Timeline</h2>
            <Timeline
              items={companyTimeline}
              dotRefs={companyDotRefs}
              activeIndex={activeCompanyIndex}
              prefix="company"
            />
          </section>

          {/* Digital Marketing Timeline */}
          <section className="mb-32 px-4">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-16 text-center">Digital Marketing Growth Timeline</h2>
            <Timeline
              items={digitalMarketingTimeline}
              dotRefs={digitalDotRefs}
              activeIndex={activeDigitalIndex}
              prefix="digital"
            />
          </section>


          <section className="bg-white text-gray-800">
            {/* WHY US Section */}
            <div className="max-w-5xl mx-auto px-6 py-16">
              <span className="uppercase text-sm font-semibold text-gray-500 tracking-wide">
                Why Us
              </span>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                At <strong>Netroots Technologies</strong>, we stand out by offering tailored IT
                solutions and 360° digital marketing services that deliver exceptional
                value for your time and investment. With a focus on cost-effectiveness,
                we keep operating expenses low, allowing you to allocate more resources
                toward growing your business.
              </p>
              <a
                href="#"
                className="inline-block mt-4 text-blue-600 font-medium hover:underline"
              >
                Learn more
              </a>
            </div>

            {/* CORE VALUES Section */}
            <div className="bg-gray-900 text-white py-16">
              <div className="max-w-5xl mx-auto px-6 text-center md:text-left">
                <span className="uppercase text-sm font-semibold text-gray-400">
                  Our Core Values
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
                  Our culture is built around five key attributes that differentiate us
                  from our competition.
                </h2>
              </div>
            </div>

            {/* VALUES GRID */}
            <div className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                {
                  icon: <FaLightbulb className="text-blue-600 text-5xl" />,
                  title: "Creative Solutions",
                  text: "We stay ahead by constantly developing and adapting to new challenges, always ready to find creative solutions.",
                },
                {
                  icon: <FaFlagCheckered className="text-blue-600 text-5xl" />,
                  title: "Focus on Quality",
                  text: "We ensure that every project is executed to the highest standard, delivering reliable and effective results.",
                },
                {
                  icon: <FaCogs className="text-blue-600 text-5xl" />,
                  title: "Flexibility & Speed",
                  text: "We respond quickly to change, offering flexible solutions that are tailored to meet evolving needs.",
                },
                {
                  icon: <FaChartBar className="text-blue-600 text-5xl" />,
                  title: "Data-Driven Decisions",
                  text: "Our strategies are built on solid data and insights, ensuring informed decisions that lead to real-world success.",
                },
              ].map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.text}</p>
                </motion.div>
              ))}
            </div>
          </section>


        </div>
      </div>
      <Footer />
    </div>
  );
}

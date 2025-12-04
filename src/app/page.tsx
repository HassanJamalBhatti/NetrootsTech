'use client';
import { useEffect, useState, useRef } from 'react';
import dynamic from "next/dynamic";
import { Inter } from 'next/font/google';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import Technology from './components/Technology';
import SolutionsPage from './components/Solution';
import AchievementsSection from "./components/AchievementsSection";
import WhyChooseUs from "./components/WhyChooseUs";
import ClientsSection from "./components/ClientsSection";
import WorkPage from './Work/page';
import Testimonialspage from './Testimonials/page';
import StatsSection from './components/StatsSection';
// import AdvertisementModal from "./components/AdvertisementModal";

const MapSection = dynamic(() => import('./components/MapSection'), { ssr: false });
import Image from "next/image";

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('');
  const [loadingPage, setLoadingPage] = useState(true);

  const { scrollY } = useScroll();
  const overlayOpacity = useTransform(scrollY, [0, 300], [0, 0.4]);
   const images = [
    "/LandingPage.png",
    "/LandingPage-1.png",
    "/LandingPage-2.png",
    "/LandingPage-3.png",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  // Simulate page loading
  useEffect(() => {
    const timer = setTimeout(() => setLoadingPage(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Scroll listener to update active section
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('section[id]');
    const handleScroll = () => {
      const scrollY = window.scrollY + 100;
      let current = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          current = section.id;
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
  };

  if (loadingPage) {
    return (
      <div className="fixed inset-0 flex flex-col justify-center items-center bg-white z-50" aria-busy="true">
        <div className="relative w-32 h-32 mb-8">
          <Image
            src="/logo.png"
            alt="Logo"
            fill
            className="object-contain"
          />
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
    <div className="relative min-h-screen overflow-x-hidden font-inter">
      {/* Global Overlay for Section Transitions */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-40"
        style={{ opacity: overlayOpacity }}
      />

      <Navbar/>

      <main className="relative">
        {/* Hero / Banner Section */}
      <SectionWrapper id="hero">
        {/* Full section video background */}
        <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[720px] object-cover"
          >
            <source src="/text.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>


        {/* Hero Section Content */}
        <section
          className={`${inter.className} relative mt-20 flex flex-row items-center justify-center min-h-[90vh] px-6 md:px-20`}
        >
          <div className="w-full max-w-7xl mx-auto relative">
            <motion.div
              className="relative z-10 flex flex-col gap-6 max-w-xl text-left"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sm md:text-base text-white">
                Experience the Best IT Services in the World.
              </p>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
                Driving Business <br />
                Growth with <br />
                Scalable Digital <br />
                Solutions!
              </h1>

              <p className="text-sm md:text-base text-white/90">
                We seamlessly blend creative marketing strategies with novel
                solutions that help businesses grow, connect, and thrive in their
                niche.
              </p>

              {/* Buttons */}
              <div className="flex flex-row flex-wrap gap-4 mt-4">
                <button
                  onClick={() => window.location.replace('/contectus')}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold sm:text-[12px] md:text-sm px-5 py-2.5 rounded-full transition-all shadow-md"
                >
                  Book a Strategy Call
                </button>

                <button
                  onClick={() => scrollTo('technology')}
                  className="bg-white/90 hover:bg-white text-blue-700 font-semibold sm:text-[12px] md:text-sm px-5 py-2.5 rounded-full transition-all shadow-md"
                >
                  Check Our Expertise
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Other sections */}
        <ClientsSection />
        <StatsSection />
      </SectionWrapper>


        {/* Technology Section */}
        <SectionWrapper id="technology">
          <Technology />
        </SectionWrapper>

        <AchievementsSection />

        {/* Solutions Section */}
        <SectionWrapper id="solutions">
          <div className="bg-blue-50">
            <SolutionsPage />
          </div>
        </SectionWrapper>

        
        <WhyChooseUs />

        {/* Testimonials */}
        <SectionWrapper id="testimonials">
          <Testimonialspage />
        </SectionWrapper>

        {/* Work */}
        <SectionWrapper id="work">
          <div className="bg-[#f9f9f9]">
            <div className="max-w-[77rem] mx-auto">
              <WorkPage />
            </div>
          </div>
        </SectionWrapper>

        

        {/* Contact */}
        <SectionWrapper id="contactus">
          <ContactUs />
          <MapSection />

        </SectionWrapper>
      </main>
      {/* <AdvertisementModal /> */}
      <Footer />
    </div>
  );
}

// Reusable Section Wrapper with Slide-In Animation
function SectionWrapper({ children, id }: { children: React.ReactNode; id: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative"
    >
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.section>
  );
}

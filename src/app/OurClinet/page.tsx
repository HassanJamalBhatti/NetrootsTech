'use client';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';
import Image from "next/image";
import { useEffect, useState } from 'react';

export default function TestimonialsPage() {
  const [loadingTestimonials, setLoadingTestimonials] = useState(true);

  // 🔹 Pagination state
  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const testimonials = [
  {
    company: "University of Lahore",
    title: "Academic Digital Excellence",
    stars: 5,
    image: "/clients/University.png",
    content:
      "NetRoots delivered a modern academic management system that significantly improved student services and internal workflows.",
  },
  {
    company: "Mehboob Tube Mills",
    title: "Operational Efficiency Improved",
    stars: 4,
    image: "/clients/Mehboob.png",
    content:
      "Their ERP solution streamlined inventory, HR, and reporting, making operations more efficient and transparent.",
  },
  {
    company: "University of Central Punjab",
    title: "Reliable Education Platform",
    stars: 5,
    image: "/clients/A7.png",
    content:
      "NetRoots provided a scalable digital solution that enhanced student management and academic coordination.",
  },
  {
    company: "Zezgo",
    title: "Strong Digital Presence",
    stars: 5,
    image: "/clients/A8.png",
    content:
      "Our online platform was delivered exactly as envisioned, improving brand visibility and user engagement.",
  },
  {
    company: "E Tissage",
    title: "Customized Business Solution",
    stars: 4,
    image: "/clients/A10.png",
    content:
      "NetRoots understood our textile business needs and delivered a system that supports production and reporting.",
  },
  {
    company: "Naseem Khan Consultancy",
    title: "Smart Consultancy Management",
    stars: 5,
    image: "/clients/A12.png",
    content:
      "Their customized CRM helped us manage clients, cases, and communication efficiently.",
  },
  {
    company: "Master",
    title: "Enterprise-Ready Solution",
    stars: 4,
    image: "/clients/A13.png",
    content:
      "NetRoots delivered a robust digital system aligned with our operational scale and growth.",
  },
  {
    company: "Unze London",
    title: "Premium eCommerce Experience",
    stars: 5,
    image: "/clients/A14.png",
    content:
      "A beautifully designed eCommerce platform that perfectly matches our luxury brand identity.",
  },
  {
    company: "Shama",
    title: "Smooth Digital Transition",
    stars: 4,
    image: "/clients/A15.png",
    content:
      "NetRoots helped modernize our operations with a reliable and easy-to-use digital solution.",
  },
  {
    company: "Zaitech",
    title: "Dependable Tech Partner",
    stars: 4,
    image: "/clients/A17.png",
    content:
      "Their team consistently delivered stable and scalable digital solutions.",
  },
  {
    company: "EMTEL Communications",
    title: "Efficient Communication Systems",
    stars: 5,
    image: "/clients/A18.png",
    content:
      "NetRoots built a communication management system that improved coordination across teams.",
  },
  {
    company: "Abha Fatima International",
    title: "International Business Support",
    stars: 4,
    image: "/clients/A20.png",
    content:
      "Their digital solution helped us manage international operations smoothly.",
  },
  {
    company: "Americas Grill",
    title: "Boosted Online Orders",
    stars: 5,
    image: "/clients/AGW.png",
    content:
      "NetRoots digitized our ordering system, increasing customer engagement and sales.",
  },
  {
    company: "Baby Master",
    title: "Perfect eCommerce Solution",
    stars: 5,
    image: "/clients/BabyMaster.png",
    content:
      "Their platform helped us scale our brand and manage nationwide sales effectively.",
  },
  {
    company: "California Pizza",
    title: "Modern Restaurant Platform",
    stars: 4,
    image: "/clients/CaliforniaPizza.png",
    content:
      "NetRoots enhanced our online presence and ordering experience significantly.",
  },
  {
    company: "Comfatra",
    title: "Streamlined Business Workflow",
    stars: 4,
    image: "/clients/comfatra.png",
    content:
      "Their solution simplified daily operations and improved reporting accuracy.",
  },
  {
    company: "Cornerstone School & College",
    title: "Smart Education System",
    stars: 5,
    image: "/clients/Cornerstone.png",
    content:
      "NetRoots delivered a complete LMS that transformed our academic administration.",
  },
  {
    company: "CureMD",
    title: "Healthcare-Grade Platform",
    stars: 5,
    image: "/clients/curemd.png",
    content:
      "A secure and reliable healthcare solution built to industry standards.",
  },
  {
    company: "Faysal Bank",
    title: "Secure Enterprise Solution",
    stars: 5,
    image: "/clients/faysalbank.png",
    content:
      "NetRoots delivered a high-security system that met our banking requirements.",
  },
  {
    company: "Hanif Jewellers",
    title: "Luxury Brand Digitization",
    stars: 5,
    image: "/clients/hanif.png",
    content:
      "Their solution enhanced our brand’s online experience and customer engagement.",
  },
  {
    company: "HapiNapi",
    title: "Retail Made Easy",
    stars: 4,
    image: "/clients/HapiNapi.png",
    content:
      "NetRoots built a clean and efficient retail management platform for us.",
  },
  {
    company: "Health Service Executive (HSE)",
    title: "Reliable Health Platform",
    stars: 5,
    image: "/clients/HE.png",
    content:
      "Their digital solution improved internal data handling and reporting.",
  },
  {
    company: "IASP",
    title: "Research Management Simplified",
    stars: 4,
    image: "/clients/iasp.png",
    content:
      "NetRoots provided a platform that streamlined research documentation and workflows.",
  },
  {
    company: "Roots IVY International",
    title: "Advanced Learning System",
    stars: 5,
    image: "/clients/IVY.png",
    content:
      "Their LMS solution improved learning management and administrative processes.",
  },
  {
    company: "IVY Academy",
    title: "Modern Academic Experience",
    stars: 5,
    image: "/clients/IVYA.png",
    content:
      "NetRoots delivered a future-ready education platform tailored to our needs.",
  },
  {
    company: "Johnson & Johnson",
    title: "Enterprise-Class Delivery",
    stars: 5,
    image: "/clients/jnj.png",
    content:
      "A scalable and reliable solution delivered with strong attention to compliance.",
  },
  {
    company: "Lahore High Court School of Law",
    title: "Legal Education Simplified",
    stars: 5,
    image: "/clients/LHRSCLLAW.png",
    content:
      "NetRoots built a structured academic platform supporting law education needs.",
  },
  {
    company: "Mercedes-Benz",
    title: "Premium Digital Solution",
    stars: 5,
    image: "/clients/Mercedes.png",
    content:
      "Their digital solution reflected our premium brand standards perfectly.",
  },
  {
    company: "NHS",
    title: "Trusted Healthcare Partner",
    stars: 5,
    image: "/clients/NHS.png",
    content:
      "NetRoots delivered a secure healthcare system supporting large-scale operations.",
  },
  {
    company: "Konica Minolta OAG",
    title: "Enterprise Workflow Solution",
    stars: 4,
    image: "/clients/OAG.png",
    content:
      "A reliable digital platform that enhanced internal workflow efficiency.",
  },
  {
    company: "Onez Commerce",
    title: "eCommerce Growth Partner",
    stars: 4,
    image: "/clients/ONEZCOMMERE.png",
    content:
      "NetRoots helped us build a scalable commerce platform aligned with our growth goals.",
  },
  {
    company: "Pain Solutions",
    title: "Healthcare Management Made Easy",
    stars: 5,
    image: "/clients/pain.png",
    content:
      "Their solution improved patient management and operational reporting.",
  },
  {
    company: "South Today",
    title: "Digital Media Excellence",
    stars: 4,
    image: "/clients/southtoday.png",
    content:
      "NetRoots delivered a clean and efficient content management system.",
  },
  {
    company: "STSP",
    title: "Operational Control Improved",
    stars: 4,
    image: "/clients/stsp.png",
    content:
      "A tailored system that improved monitoring and reporting workflows.",
  },
  {
    company: "Sufi Ataa",
    title: "Brand Digitization",
    stars: 4,
    image: "/clients/SufiAtaa.png",
    content:
      "NetRoots helped us modernize our brand’s digital presence effectively.",
  },
  {
    company: "Times Institute",
    title: "Education Made Efficient",
    stars: 4,
    image: "/clients/timesInstitute.png",
    content:
      "Their platform simplified admissions, academics, and reporting processes.",
  },
  {
    company: "TUV Austria",
    title: "Compliance-Ready Solution",
    stars: 5,
    image: "/clients/tuvaustria.png",
    content:
      "NetRoots delivered a secure and compliant enterprise-grade system.",
  },
  {
    company: "University of Southern Punjab",
    title: "Future-Ready Education System",
    stars: 5,
    image: "/clients/USP.png",
    content:
      "Their digital platform enhanced student engagement and administrative efficiency.",
  },
  {
    company: "Zapple",
    title: "Creative & Innovative",
    stars: 4,
    image: "/clients/zapple.png",
    content:
      "NetRoots delivered a modern platform that elevated our brand identity.",
  },
];

  const totalPages = Math.ceil(testimonials.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentTestimonials = testimonials.slice(startIndex, endIndex);

  useEffect(() => {
    const timer = setTimeout(() => setLoadingTestimonials(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col relative">
      <Navbar />

      {/* Full-page loader */}
      {loadingTestimonials && (
        <div
          className="fixed inset-0 flex flex-col justify-center items-center bg-white z-50"
          aria-busy="true"
        >
          <div className="relative w-32 h-32 mb-8">
            <Image src="/logo.png" alt="Logo" fill className="object-contain" />
          </div>
          <div className="dots-loader flex space-x-2">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      )}

      {/* Page Content */}
      <div className={`${loadingTestimonials ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}>
        {/* Hero Section */}
        <section className="py-24 px-6 mt-10 text-center bg-gradient-to-b from-gray-50 to-white">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fadeInUp text-gray-900">
            Our Happy Clients
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fadeInUp delay-200 text-gray-700">
            Hear from companies and organizations that trust us to deliver high-quality solutions.
          </p>
        </section>

        {/* Testimonials Section */}
        <section className="flex-1 max-w-6xl mx-auto px-6 py-20">

          {/* Testimonials Grid */}
          <div className="grid gap-10 md:grid-cols-2">
            {currentTestimonials.map((item, i) => (
              <div
                key={i}
                className="bg-white shadow-xl p-8 rounded-2xl border border-gray-200 transform hover:scale-105 hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28">
                    <Image
                      src={item.image}
                      alt={item.company}
                      fill
                      sizes="(max-width: 640px) 96px, 112px"
                      className="object-contain rounded-xl border-2 border-gray-300 shadow-md p-2 bg-white"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{item.company}</h3>
                    <p className="text-yellow-500">
                      {"★".repeat(item.stars)}{"☆".repeat(5 - item.stars)}
                    </p>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-indigo-600 mb-3">{item.title}</h4>
                <p className="text-gray-700 leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-4 mt-16">
            <button
              onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-5 py-2 rounded-lg bg-gray-200 text-gray-700 disabled:opacity-50 hover:bg-gray-300 transition"
            >
              Previous
            </button>

            <span className="font-medium text-gray-700">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-5 py-2 rounded-lg bg-indigo-600 text-white disabled:opacity-50 hover:bg-indigo-700 transition"
            >
              Next
            </button>
          </div>

          <hr className="border-t-2 border-gray-200 my-20 w-4/5 mx-auto rounded" />
        </section>

        <ContactUs />
        <Footer />
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
        }
        .animate-fadeInUp.delay-200 {
          animation-delay: 0.2s;
        }
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

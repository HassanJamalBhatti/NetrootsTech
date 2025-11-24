'use client';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';
import Image from "next/image";

import { useEffect, useState } from 'react';

export default function TestimonialsPage() {
  const [loadingTestimonials, setLoadingTestimonials] = useState(true);

  const testimonials = [
    {
      company: "TUV Austria",
      title: "Saved my Business",
      stars: 5,
      image: "/clients/hanif.png",
      content:
        "We acquired an HR system from NetRoots, and it exceeded expectations. NetRoots customized our software perfectly, addressing every HR need at an affordable price.",
    },
    {
      company: "NK Consultancy",
      title: "The right investment",
      stars: 5,
      image: "/clients/iasp.png",
      content:
        "NetRoots designed a customized student management system for us. Each step is crystal clear, and students get timely notifications for their applications.",
    },
    {
      company: "Email Communications",
      title: "Affordable and reliable",
      stars: 4,
      image: "/clients/ivy.png",
      content:
        "We purchased an ERP system including HR functions from NetRoots. It helped us manage inventory and internal processes efficiently.",
    },
    {
      company: "Roots International Schools",
      title: "Exactly what we wanted",
      stars: 5,
      image: "/clients/pain.png",
      content:
        "NetRoots provided a state-of-the-art LMS that maintained our school's workflow and helped manage administrative tasks effectively.",
    },
  ];

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
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800">
            What People Say About Us
          </h2>

          {/* Testimonials Grid */}
          <div className="grid gap-10 md:grid-cols-2">
            {testimonials.map((item, i) => (
              <div
                key={i}
                className="bg-white shadow-xl p-8 rounded-2xl border border-gray-200 transform hover:scale-105 hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16">
                    <Image
                        src={item.image}
                        alt={item.company}
                        fill
                        className="object-cover rounded-xl border-2 border-gray-300 shadow-md"
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

          <hr className="border-t-2 border-gray-200 my-20 w-4/5 mx-auto rounded" />
        </section>

        {/* Contact Us & Footer */}
        <ContactUs />
        <Footer />
      </div>

      {/* Tailwind Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
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
            .dot:nth-child(1) {
              animation-delay: 0s;
            }
            .dot:nth-child(2) {
              animation-delay: 0.3s;
            }
            .dot:nth-child(3) {
              animation-delay: 0.6s;
            }
            @keyframes blink {
              0%, 20% { opacity: 0; }
              50% { opacity: 1; }
              100% { opacity: 0; }
            }
      `}</style>
    </div>
  );
}

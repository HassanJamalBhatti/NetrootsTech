"use client";

import { useParams } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import type { ReactElement } from "react";
import { 
  FaBrain, 
  FaChartLine, 
  FaCloud, 
  FaUsersCog, 
  FaRocket, 
  FaLaptopCode, 
  FaCube, 
  FaCogs 
} from "react-icons/fa";

interface ServiceType {
  title: string;
  description: string;
  icon: ReactElement;
  link: string;
}

export default function ServiceDetail() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  const serviceData: Record<string, ServiceType> = {
    "ai-automation": {
      title: "Intelligent Automation & AI Solutions",
      description:
        "Leverage AI, machine learning, and smart automation to optimize operations and enhance customer experiences.",
      icon: <FaBrain size={28} />,
      link: "/Solutions/ai-automation",
    },
    "data-intelligence": {
      title: "Data Intelligence & Predictive Analytics",
      description:
        "Transform your data into actionable insights with real-time analytics, dashboards, and predictive modeling.",
      icon: <FaChartLine size={28} />,
      link: "/Solutions/data-intelligence",
    },
    "cloud-architecture": {
      title: "Cloud Architecture & Next-Gen Infrastructure",
      description:
        "Scalable, secure, and flexible cloud solutions to power modern businesses and accelerate digital transformation.",
      icon: <FaCloud size={28} />,
      link: "/Solutions/cloud-architecture",
    },
    "staff-augmentation": {
      title: "Talent-as-a-Service (Staff Augmentation)",
      description:
        "Access top-tier tech talent on demand. Scale your team with skilled developers, designers, and digital specialists.",
      icon: <FaUsersCog size={28} />,
      link: "/Solutions/staff-augmentation",
    },
    "mvp-launch": {
      title: "Product Innovation & MVP Launch",
      description:
        "From ideation to launch, we help bring your product vision to life with agile development and rapid MVP testing.",
      icon: <FaRocket size={28} />,
      link: "/Solutions/mvp-launch",
    },
    "growth-marketing": {
      title: "Growth Marketing & Digital Acceleration",
      description:
        "Data-driven marketing strategies, performance campaigns, and brand amplification to maximize ROI.",
      icon: <FaLaptopCode size={28} />,
      link: "/Solutions/growth-marketing",
    },
    "web3-apps": {
      title: "Web3 & App Experiences",
      description:
        "Custom websites, mobile apps, and immersive digital experiences designed for engagement, retention, and business impact.",
      icon: <FaCube size={28} />,
      link: "/Solutions/web3-apps",
    },
    "devops-cd": {
      title: "DevOps & Continuous Delivery",
      description:
        "Streamline your software development pipelines with CI/CD, cloud-native infrastructure, and automated workflows.",
      icon: <FaCogs size={28} />,
      link: "/Solutions/devops-cd",
    },
  };

  const service = slug ? serviceData[slug] : undefined;

  if (!service) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
        <Link href="/Solutions" className="text-blue-600 hover:underline">
          ← Back to Solutions
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      <main className="mt-20 px-6 md:px-16 py-12 bg-gradient-to-b from-[#f8faff] to-[#e7ebf5] min-h-screen">
        <div className="max-w-4xl mx-auto text-center">
          {/* Service Icon */}
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-blue-600 text-white rounded-full inline-flex">
              {service.icon}
            </div>
          </div>

          {/* Title & Description */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
            {service.title}
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-12">
            {service.description}
          </p>
        </div>

        {/* Pricing Plans Section */}
        <section className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Choose Your Plan
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {["Package 1", "Package 2", "Package 3"].map((pkg, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4">{pkg}</h3>
                <p className="text-gray-500 mb-2 font-medium">
                  {pkg === "Package 1"
                    ? "Monthly Pricing Plan"
                    : pkg === "Package 2"
                    ? "Yearly Pricing Plan"
                    : "Custom Pricing Plan"}
                </p>
                <p className="text-4xl font-bold mb-6">$_ _ _ _</p>
                <ul className="text-gray-700 space-y-2 mb-6 text-left">
                  <li>✔ Website Performance Monitoring</li>
                  <li>✔ Content Updates & Optimization</li>
                  <li>✔ Security Checks & Updates</li>
                  <li>✔ UX & Mobile Enhancements</li>
                  <li>✔ Analytics & Reporting</li>
                  <li>✔ SEO Adjustments</li>
                  <li>✔ Custom Development</li>
                  <li>✔ Feature Integration</li>
                  <li>✔ Support & Maintenance</li>
                  <li>✔ Conversion Optimization</li>
                </ul>
                <Link
                  href="/contectus"
                  className="block bg-gray-800 text-white text-center py-3 rounded-md font-medium hover:bg-gray-700"
                >
                  Sign Up
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

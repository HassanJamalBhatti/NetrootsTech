"use client";

import { useParams } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";

interface ServiceType {
  title: string;
  image: string;
  description: string;
}

export default function ServiceDetail() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug; // ✅ Ensure slug is string

  // Service data mapping
  const serviceData: Record<string, ServiceType> = {
    "google-rank": {
      title: "Rank #1 on Google",
      image: "/selution/google-rank.jpg",
      description:
        "Boost your website visibility and rank at the top of Google search results with our SEO experts.",
    },
    "web-development": {
      title: "Website Design & Development",
      image: "/selution/web-dev.jpg",
      description:
        "We craft modern, responsive, and high-performing websites that deliver results.",
    },
    design: {
      title: "Designing & Artistry",
      image: "/selution/design.jpg",
      description:
        "We bring creativity to life through modern design and brand artistry that stands out.",
    },
    community: {
      title: "Community Management",
      image: "/selution/community.jpg",
      description:
        "Engage your audience effectively with our professional community management services.",
    },
    performance: {
      title: "Performance Marketing",
      image: "/selution/performance.jpg",
      description:
        "Drive measurable ROI with our data-driven performance marketing strategies.",
    },
    strategy: {
      title: "Brand Strategy Development",
      image: "/selution/strategy.jpg",
      description:
        "We create brand strategies that define, differentiate, and grow your business.",
    },
    ecommerce: {
      title: "E-commerce Solutions",
      image: "/selution/ecommerce.jpg",
      description:
        "Sell smarter with our optimized e-commerce solutions designed to increase conversions.",
    },
    "content-marketing": {
      title: "Content Marketing",
      image: "/selution/content.jpg",
      description:
        "Engage your audience with strategic, valuable, and SEO-friendly content marketing.",
    },
    "email-marketing": {
      title: "Email Marketing",
      image: "/selution/email.jpg",
      description:
        "Nurture leads and grow your business with effective email marketing campaigns.",
    },
    "social-media": {
      title: "Social Media Management",
      image: "/selution/social.jpg",
      description:
        "Build your brand presence and engage customers through tailored social media strategies.",
    },
    reputation: {
      title: "Reputation Management",
      image: "/selution/reputation.jpg",
      description:
        "Protect and enhance your online image with our expert reputation management services.",
    },
    analytics: {
      title: "Analytics & Reporting",
      image: "/selution/analytics.jpg",
      description:
        "Gain actionable insights from detailed analytics and performance reports.",
    },
    "lead-generation": {
      title: "Lead Generation",
      image: "/selution/lead.jpg",
      description:
        "Generate high-quality leads that convert through our proven lead generation systems.",
    },
    "content-creation": {
      title: "Content Creation",
      image: "/selution/content2.jpg",
      description:
        "From visuals to videos, we create engaging content that connects with your audience.",
    },
    consultancy: {
      title: "Brand Consultancy",
      image: "/selution/consultancy.jpg",
      description:
        "We provide expert consultancy to refine your brand strategy and digital growth plans.",
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
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
            {service.title}
          </h1>

          <div className="relative w-full h-64 md:h-96 mb-8 rounded-xl overflow-hidden shadow-lg">
            <Image src={service.image} alt={service.title} fill className="object-cover" />
          </div>

          <p className="text-gray-700 text-lg leading-relaxed mb-8">{service.description}</p>
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
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-2xl transition-all"
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

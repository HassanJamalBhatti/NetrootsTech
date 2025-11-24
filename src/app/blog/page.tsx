"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function BlogPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on page load
    setIsVisible(true);
  }, []);
  const [loadingPage, setLoadingPage] = useState(true);

  // Simulate page loading
  useEffect(() => {
    const timer = setTimeout(() => setLoadingPage(false), 2000);
    return () => clearTimeout(timer);
  }, []);

    const blogPosts = [
    {
        id: 1,
        title: "Boost Your Website Performance in 2025",
        description:
        "Learn the best tips and tools to improve your website speed, UX, and SEO for higher conversion rates.",
        image: "/blog/blog1.jpg",
        link: "/blog/boost-website-performance",
    },
    {
        id: 2,
        title: "Top 10 SEO Strategies for Modern Websites",
        description:
        "Explore the most effective SEO strategies to increase your search engine ranking and organic traffic.",
        image: "/blog/blog2.jpg",
        link: "/blog/top-10-seo-strategies",
    },
    {
        id: 3,
        title: "Website Redesign: When and Why to Do It",
        description:
        "Understand the signs that indicate it’s time to redesign your website and how to do it efficiently.",
        image: "/blog/blog3.jpg",
        link: "/blog/website-redesign-tips",
    },
    {
        id: 4,
        title: "Maximizing Mobile Optimization for 2025",
        description:
        "Learn how to optimize your website for mobile users to improve engagement and conversions.",
        image: "/blog/blog4.jpg",
        link: "/blog/mobile-optimization-guide",
    },
    {
        id: 5,
        title: "Effective Content Marketing Strategies",
        description:
        "Discover how to create content that attracts, engages, and converts your audience consistently.",
        image: "/blog/blog5.jpg",
        link: "/blog/content-marketing-strategies",
    },
    {
        id: 6,
        title: "Understanding Core Web Vitals",
        description:
        "Learn what Core Web Vitals are, why they matter, and how to optimize your website for them.",
        image: "/blog/blog6.jpg",
        link: "/blog/core-web-vitals-guide",
    },
    {
        id: 7,
        title: "Leveraging AI Tools for Website Growth",
        description:
        "Explore AI-driven tools and strategies that can help boost your website’s performance and engagement.",
        image: "/blog/blog7.jpg",
        link: "/blog/ai-website-growth",
    },
    {
        id: 8,
        title: "E-commerce UX Tips to Increase Sales",
        description:
        "Enhance your online store’s user experience to reduce friction and drive more conversions.",
        image: "/blog/blog8.jpg",
        link: "/blog/ecommerce-ux-tips",
    },
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
    <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
      <Navbar />

      {/* HERO SECTION */}
      <header className="relative bg-gray-900">
        <div className="absolute inset-0">
          <div className="relative w-full h-80"> {/* adjust h-80 or desired height */}
            <Image
              src="/images/blog-hero.jpg"
              alt="Blog Header"
              fill
              className="object-cover opacity-50"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
        </div>
        <div className="relative z-10 text-center py-28 px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Our Blog
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Stay updated with the latest tips, guides, and insights to optimize your website and grow your business online.
          </p>
        </div>
      </header>

      {/* BLOG POSTS SECTION */}
      <main className="bg-gray-50 py-16 px-6">
        <section className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post) => (
            <div
                key={post.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
                <div className="overflow-hidden h-56">
                <div className="relative w-full h-64"> 
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>

                </div>
                <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-3 hover:text-blue-600 transition-colors">
                    {post.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-1">{post.description}</p>

                {/* HR line */}
                <hr className="my-4 border-gray-300" />

                <Link
                    href={post.link}
                    className="mt-auto inline-block text-blue-600 font-medium hover:underline"
                >
                    Read More
                </Link>
                </div>
            </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

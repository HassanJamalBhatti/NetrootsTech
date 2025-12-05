'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function NewsAndBlogs() {
  const [isLoading, setIsLoading] = useState(true);

  const blogs = [
    {
      category: 'News',
      title: '360 Digital Marketing Services',
      description:
        'Digital Marketing Services in today’s digital landscape, businesses must leverage every tool to outshine and prevail in this highly competitive market.',
      image: '/blog/blog1.jpg',
      link: '/blog/360-digital-marketing-services',
    },
    {
      category: 'News',
      title: 'The Best SEO Services Company Los Angeles | Online Success',
      description:
        'Are you looking to boost your online presence? Netroots Technologies is here to help! We are the best SEO services company Los Angeles.',
      image: '/blog/blog2.jpg',
      link: '/blog/best-seo-services-los-angeles',
    },
    {
      category: 'News',
      title: 'A Proven E-commerce SEO Services Company | Market Leaders',
      description:
        'In the vast ocean of the internet, visibility is the key to success. When potential customers search for products or services you offer, you want.',
      image: '/blog/blog3.jpg',
      link: '/blog/ecommerce-seo-services-company',
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <main className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
          <p className="text-gray-500 text-sm">Loading latest blogs…</p>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white py-16 px-6 sm:px-10 lg:px-20 text-gray-900">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
          Our Latest <span className="text-blue-600">News & Blogs</span>
        </h2>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {blogs.map((blog, index) => (
          <article
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
          >
            <div className="relative w-full h-56 sm:h-64 overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <p className="text-xs uppercase font-semibold text-blue-500 mb-2">
                {blog.category}
              </p>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                {blog.title}
              </h3>
              <p className="text-gray-600 text-sm flex-grow leading-relaxed mb-4">
                {blog.description}
              </p>
              <a
                href={blog.link}
                className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:underline mt-auto"
              >
                Read More
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

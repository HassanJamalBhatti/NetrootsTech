"use client";

import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Footer() {
  return (
    <footer className={`bg-black text-white pt-5 ${inter.className}`}>

      {/* -------------------- Desktop Footer -------------------- */}
      <div className="hidden sm:flex py-10 px-6 md:px-20 max-w-7xl mx-auto flex-col md:flex-row justify-between gap-10">
        
        {/* Logo */}
        <div className="flex justify-center md:justify-start mb-6 md:mb-0">
          <Image
            src="/logo2.png"
            alt="Netroots Technologies"
            width={250}
            height={40}
            className="object-contain"
          />
        </div>

        {/* Solutions */}
        <div className="flex-1 md:flex-1 ml-15 text-center md:text-left">
          <h3 className="font-semibold mb-4 text-lg">Solutions</h3>
          <ul className="space-y-2 text-gray-300 text-sm md:text-sm">
            <li><Link href="/solutions/seo" className="hover:text-white transition-colors">Rank #1 on Google</Link></li>
            <li><Link href="/solutions/web-design" className="hover:text-white transition-colors">Website Design & Development</Link></li>
            <li><Link href="/solutions/design-alchemy" className="hover:text-white transition-colors">Design Alchemy</Link></li>
            <li><Link href="/solutions/community-management" className="hover:text-white transition-colors">Community Management</Link></li>
            <li><Link href="/solutions/performance-marketing" className="hover:text-white transition-colors">Performance Marketing</Link></li>
            <li><Link href="/solutions/brand-strategy" className="hover:text-white transition-colors">Brand Strategy Development</Link></li>
            <li><Link href="/solutions/ecommerce" className="hover:text-white transition-colors">E-commerce Solutions</Link></li>
            <li><Link href="/solutions/content-marketing" className="hover:text-white transition-colors">Content Marketing</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div className="flex-1 md:flex-1 text-center md:text-left">
          <h3 className="font-semibold mb-4 text-lg">Company</h3>
          <ul className="space-y-2 text-gray-300 text-sm md:text-sm">
            <li><Link href="/WhyUs" className="hover:text-white transition-colors">Why Us</Link></li>
            <li><Link href="/Careers" className="hover:text-white transition-colors">Careers</Link></li>
            <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
          </ul>
        </div>

        {/* Social & Newsletter */}
        <div className="flex-1 flex flex-col gap-6 md:-ml-35 text-center md:text-left">
          {/* Social Icons */}
          <div className="flex justify-center md:justify-start items-center gap-4 text-2xl text-gray-300">
            <a href="https://www.facebook.com/netrootstech" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="https://www.linkedin.com/company/netroots-technologies" className="hover:text-blue-400"><FaLinkedinIn /></a>
            <a href="https://www.instagram.com/netrootstechnologies1" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="https://www.youtube.com/@netrootstechnologies7406" className="hover:text-red-600"><FaYoutube /></a>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-3 mt-4 md:mt-0">
            <input
              type="email"
              placeholder="Don't miss out on an update"
              className="w-full p-3 rounded-full border border-gray-600 text-white text-sm placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <label className="flex items-start gap-2 text-xs text-gray-400 mt-2 justify-start">
              <input type="checkbox" className="w-4 h-4 accent-blue-500 rounded mt-1" />
              I agree to the Privacy Policy & give my permission to process my personal data for the purposes specified in the Privacy Policy.
            </label>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 text-sm mt-3 self-center md:self-start">
              Submit
            </button>
          </div>

          {/* Terms */}
          <div className="flex flex-wrap gap-4 text-gray-400 text-xs mt-4 justify-center md:justify-start">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>

      {/* -------------------- Mobile Footer -------------------- */}
      <div className="sm:hidden px-6 py-8 bg-black text-white max-w-7xl mx-auto">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/logo2.png"
            alt="Netroots Technologies"
            width={180}
            height={40}
            className="object-contain"
          />
        </div>

        {/* Solutions and Company side by side */}
        <div className="flex gap-4">

          {/* Solutions - Left */}
          <div className="flex-1 bg-gray-900 rounded-xl p-4 shadow-inner">
            <h3 className="font-bold mb-3 text-lg text-left text-white">Solutions</h3>
            <ul className="space-y-2 text-gray-300 text-sm text-left">
              <li><Link href="/solutions/seo" className="hover:text-blue-400 transition-colors font-medium">Rank #1 on Google</Link></li>
              <li><Link href="/solutions/web-design" className="hover:text-blue-400 transition-colors font-medium">Website Design & Development</Link></li>
              <li><Link href="/solutions/design-alchemy" className="hover:text-blue-400 transition-colors font-medium">Design Alchemy</Link></li>
              <li><Link href="/solutions/community-management" className="hover:text-blue-400 transition-colors font-medium">Community Management</Link></li>
              <li><Link href="/solutions/performance-marketing" className="hover:text-blue-400 transition-colors font-medium">Performance Marketing</Link></li>
              <li><Link href="/solutions/brand-strategy" className="hover:text-blue-400 transition-colors font-medium">Brand Strategy Development</Link></li>
              <li><Link href="/solutions/ecommerce" className="hover:text-blue-400 transition-colors font-medium">E-commerce Solutions</Link></li>
              <li><Link href="/solutions/content-marketing" className="hover:text-blue-400 transition-colors font-medium">Content Marketing</Link></li>
            </ul>
          </div>

          {/* Company - Right */}
          <div className="flex-1 bg-gray-900 rounded-xl p-4 shadow-inner">
            <h3 className="font-bold mb-3 text-lg text-left text-white">Company</h3>
            <ul className="space-y-2 text-gray-300 text-sm text-left">
              <li><Link href="/WhyUs" className="hover:text-blue-400 transition-colors font-medium">Why Us</Link></li>
              <li><Link href="/Careers" className="hover:text-blue-400 transition-colors font-medium">Careers</Link></li>
              <li><Link href="/blog" className="hover:text-blue-400 transition-colors font-medium">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-blue-400 transition-colors font-medium">FAQ</Link></li>
            </ul>
          </div>

        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-6 text-2xl text-gray-300 mt-6">
          <a href="https://www.facebook.com/netrootstech" className="hover:text-blue-500 transition"><FaFacebookF /></a>
          <a href="https://www.linkedin.com/company/netroots-technologies" className="hover:text-blue-400 transition"><FaLinkedinIn /></a>
          <a href="https://www.instagram.com/netrootstechnologies1" className="hover:text-pink-500 transition"><FaInstagram /></a>
          <a href="https://www.youtube.com/@netrootstechnologies7406" className="hover:text-red-600 transition"><FaYoutube /></a>
        </div>

        {/* Newsletter */}
        <div className="bg-gray-900 rounded-xl p-4 shadow-inner flex flex-col gap-3 mt-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-full border border-gray-600 text-white text-sm placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label className="flex items-start gap-2 text-xs text-gray-400 mt-2">
            <input type="checkbox" className="w-4 h-4 accent-blue-500 rounded mt-1" />
            I agree to the Privacy Policy & give my permission to process my personal data.
          </label>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 text-sm mt-3 self-center">
            Subscribe
          </button>
        </div>

        {/* Terms */}
        <div className="flex flex-wrap gap-4 text-gray-400 text-xs mt-4 justify-center text-center">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>

      </div>

      {/* -------------------- White Bar -------------------- */}
      <div className="bg-white text-black py-4 text-center text-sm max-w-7xl mx-auto">
        &copy; {new Date().getFullYear()} Netroots Technologies. All Rights Reserved.
      </div>
    </footer>
  );
}

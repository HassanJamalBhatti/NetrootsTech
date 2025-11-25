'use client';

import React, { useState, useEffect, useRef, KeyboardEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

type NavItem = {
  label: string;
  href: string;
  dropdown?: boolean;
  items?: { label: string; href: string }[];
};

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '/Aboutus',
    dropdown: true,
    items: [
      { label: 'Why Us', href: '/WhyUs' },
      { label: 'Careers', href: '/Careers' },
      
    ],
  },
  {
    label: 'Solutions',
    href: '/Solutions',
    dropdown: true, 
  },
  { label: 'Get Started', href: '/get-started' },
  { label: 'Blog', href: '/blog' },
];

// Custom hook for detecting clicks outside of a ref element
function useOutsideClick(ref: React.RefObject<HTMLElement>, handler: () => void) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [ref, handler]);
}

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);
 
  useOutsideClick(dropdownRef as React.RefObject<HTMLElement>, () =>
    setOpenDropdown(null)
  );


  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const onDropdownKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setOpenDropdown(null);
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full bg-white shadow-md h-20 z-50"
      role="navigation"
      aria-label="Primary Navigation"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 h-full relative">
        {/* Logo */}
        <Link href="/" aria-label="Home" className="flex items-center h-full">
          <Image
            src="/logo1.png"
            alt="Company Logo"
            width={160}
            height={64}
            priority
            className="object-contain"
            onError={(e) => {
              e.currentTarget.src = '/fallback-logo.svg';
            }}
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 text-sm font-medium" role="menubar">
          {navItems.map(({ label, href, dropdown, items }) => (
            <li
              key={label}
              className="relative"
              role="none"
              onMouseEnter={() => {
                if (timeoutId.current) clearTimeout(timeoutId.current);
                if (dropdown) setOpenDropdown(label);
              }}
              onMouseLeave={() => {
                timeoutId.current = setTimeout(() => setOpenDropdown(null), 200);
              }}
            >
              {dropdown ? (
                <>
                  <Link
                    href={href}
                    aria-haspopup="true"
                    aria-expanded={openDropdown === label}
                    aria-controls={`${label}-dropdown`}
                    className={`flex items-center gap-1 text-gray-800 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 font-medium transition-colors ${
                      pathname.startsWith(href) ? 'text-blue-700' : ''
                    }`}
                  >
                    {label}
                    <svg
                      className={`w-3 h-3 transition-transform ${openDropdown === label ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>

                  {openDropdown === label && (
                    <div
                      id={`${label}-dropdown`}
                      ref={dropdownRef}
                      role="menu"
                      aria-label={`${label} submenu`}
                      tabIndex={-1}
                      onKeyDown={onDropdownKeyDown}
                      className="fixed top-[64px] left-0 right-0 mt-4 bg-white shadow-xl border-t border-gray-200 z-20"
                      style={{ minHeight: '250px' }}
                    >
                      <div className="max-w-7xl mx-auto px-8 py-8 flex gap-12">
                        {/* Special multi-column dropdown for Solutions */}
                        {label === 'Solutions' ? (
                          <>
                            {/* Solutions Section */}
                            <section className="flex-1" aria-label="Solutions">
                              <h4 className="font-bold text-[18px] text-gray-700 mb-3">Solutions</h4>
                              <ul className="space-y-2 text-sm text-gray-800">
                                {[
                                  'Community Management',
                                  'Performance Marketing',
                                  'Design Alchemy',
                                  'Web Development',
                                  'Brand Strategy Development',
                                  'E-commerce Solutions',
                                ].map((solution) => (
                                  <li key={solution}>
                                    <Link
                                      href="/Solutions"
                                      className="hover:text-blue-700 font-medium"
                                      role="menuitem"
                                      tabIndex={0}
                                      onClick={() => setOpenDropdown(null)}
                                    >
                                      {solution}
                                    </Link>
                                  </li>
                                ))}
                                <li>
                                  <Link
                                    href="/Solutions"
                                    className="text-blue-700 font-semibold hover:underline"
                                    role="menuitem"
                                    tabIndex={0}
                                    onClick={() => setOpenDropdown(null)}
                                  >
                                    View all
                                  </Link>
                                </li>
                              </ul>
                            </section>

                            {/* Our Products Section */}
                            <section className="flex-1" aria-label="Our Products">
                              <h4 className="text-gray-700 font-bold text-[18px] mb-3">Our Products</h4>
                              <ul className="grid grid-cols-2 gap-4 text-sm text-gray-800">
                                {[
                                  { label: 'FORSA HR', icon: '/forsahr.png', href: '/forsa-hr' },
                                  { label: 'FORSA ERP', icon: '/forsahr.png', href: '/forsa-erp' },
                                  { label: 'EDUCATUM', icon: '/educatum.png', href: '/educatum' },
                                  { label: 'AIMS ERP', icon: '/educatum.png', href: '/aims-erp' },
                                ].map(({ label, icon, href }) => (
                                  <li key={label}>
                                    <Link
                                      href={href}
                                      className="flex flex-col items-center gap-2 p-4 border border-gray-200 rounded hover:border-blue-700 hover:text-blue-700 transition-colors"
                                      role="menuitem"
                                      tabIndex={0}
                                      onClick={() => setOpenDropdown && setOpenDropdown(null)}
                                    >
                                      <Image
                                        src={icon}
                                        alt={`${label} logo`}
                                        width={82}
                                        height={58}
                                        className="shrink-0"
                                      />
                                      <span>{label}</span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                              <Link
                                href="/OurProducts"
                                className="mt-2 block text-blue-700 font-semibold hover:underline"
                                role="menuitem"
                                tabIndex={0}
                                onClick={() => setOpenDropdown && setOpenDropdown(null)}
                              >
                                View all
                              </Link>
                            </section>
                            {/* Industry Focus Section */}
                            <section className="flex-1 bg-gray-100 max-w-sm p-4 rounded-md"  aria-label="Industry Focus">
                              <h4 className="font-bold text-[18px] text-gray-700 mb-3">Industry Focus</h4>
                              <ul className="space-y-2 text-sm text-gray-800">
                                {[
                                  'Industry Manufacturing',
                                  'Transportation Logistics',
                                  'Healthcare',
                                  'Banks & Insurance',
                                  'Consulting Providers',
                                  'Non Profit',
                                ].map((industry) => (
                                  <li key={industry}>
                                    <Link
                                      href="/industry"
                                      className="hover:text-blue-700 font-medium"
                                      role="menuitem"
                                      tabIndex={0}
                                      onClick={() => setOpenDropdown(null)}
                                    >
                                      {industry}
                                    </Link>
                                  </li>
                                ))}
                                <li>
                                  <Link
                                    href="/industry"
                                    className="text-blue-700 font-semibold hover:underline"
                                    role="menuitem"
                                    tabIndex={0}
                                    onClick={() => setOpenDropdown(null)}
                                  >
                                    View all
                                  </Link>
                                </li>
                              </ul>
                            </section>
                          </>
                        ) : (
                          <>
                            {/* Existing Intro Text Section */}
                            <section className="flex-1 space-y-3 mt-10 text-sm text-gray-700" aria-hidden="true">
                              <p className="text-xl font-bold">Simplifying IT and Digitalization for Business.</p>
                            </section>

                            {/* Existing Links Section */}
                            <section className="flex-1" aria-label={`${label} links`}>
                              <h4 className="font-bold text-[18px] text-gray-700 mb-3">Explore</h4>
                              {items?.map(({ label: itemLabel, href: itemHref }) => (
                                <Link
                                  key={itemLabel}
                                  href={itemHref}
                                  role="menuitem"
                                  tabIndex={0}
                                  onClick={() => setOpenDropdown(null)}
                                  className="block py-2 text-gray-800 hover:text-blue-700 font-medium focus:outline-none focus:ring-1 focus:ring-blue-600 focus:ring-offset-2 transition-colors"
                                >
                                  {itemLabel}
                                </Link>
                              ))}

                              {/* Social Links */}
                             <h4 className="text-gray-700 font-semibold mt-5 mb-2">Follow Us</h4>
                                <div className="flex space-x-4 mt-4 mb-6">
                                {[
                                    { src: 'https://cdn-icons-png.flaticon.com/512/733/733547.png', alt: 'Facebook', href: 'https://www.facebook.com/netrootstech' },
                                    { src: 'https://cdn-icons-png.flaticon.com/512/733/733561.png', alt: 'LinkedIn', href: 'https://www.linkedin.com/company/netroots-technologies' },
                                    { src: 'https://cdn-icons-png.flaticon.com/512/733/733558.png', alt: 'Instagram', href: 'https://www.instagram.com/netrootstechnologies1' },
                                    { src: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png', alt: 'YouTube', href: 'https://www.youtube.com/@netrootstechnologies7406' },
                                ].map(({ src, alt, href }, idx) => (
                                    <a
                                    key={idx}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Follow us on ${alt}`}
                                    className="focus:outline-none focus:ring-2 focus:ring-blue-600 rounded p-1 hover:bg-gray-100 transition-colors"
                                    >
                                    <div className="relative w-5 h-5">
                                      <Image
                                        src={src}
                                        alt={alt}
                                        fill
                                        className="hover:opacity-80 transition-opacity object-contain"
                                      />
                                    </div>
                                    </a>
                                ))}
                                </div>

                            </section>

                            {/* Clients Section */}
                            <section className="flex-1 bg-gray-100 max-w-sm p-4 rounded-md" aria-label="Our Clients">
                            <h4 className="font-bold text-[18px] text-gray-700 mb-4">Our Clients</h4>
                            <ul className="space-y-3 text-sm text-gray-800">
                              {[
                                { name: 'Johnson & Johnson', logo: '/jnj' },
                                { name: 'IVYCMS', logo: '/ivy' },
                                { name: 'Hanif Jewellers', logo: '/hanif' },
                                { name: 'ISP', logo: '/iasp' },
                                { name: 'STSP', logo: '/stsp' },
                                { name: 'Pain Solutions', logo: '/pain' },
                              ].map(({ name, logo }) => (
                                <li key={name} className="flex items-center gap-2">
                                  <Image
                                    src={`/clients${logo}.png`}
                                    alt={name}
                                    width={20}
                                    height={20}
                                    className="object-contain"
                                    onError={(e) => {
                                      e.currentTarget.src = '/placeholder-logo.svg';
                                    }}
                                  />
                                  <span className="text-sm">{name}</span>
                                </li>
                              ))}
                            </ul>
                            <Link
                              href="/OurClinet"
                              className="text-blue-700 font-semibold mt-3 inline-block hover:underline focus:outline-none focus:ring-2 focus:ring-blue-600 rounded transition-colors"
                            >
                              View all 
                            </Link>
                          </section>

                          </>
                        )}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={href}
                  className={`${
                    pathname === href ? 'text-blue-700 font-semibold' : 'text-gray-800'
                  } hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded px-2 py-1 transition-colors`}
                  role="menuitem"
                >
                  {label}
                </Link>
              )}
            </li>
          ))}
        </ul>

     

        {/* Contact Button */}
        <Link
          href="/contectus"
          className="hidden md:inline-block bg-blue-700 text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-colors"
        >
          Contact Us
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          className="md:hidden text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded p-2"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          type="button"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

{/* Mobile Menu */}
{isMobileMenuOpen && (
  <div
    id="mobile-menu"
    className="md:hidden px-6 pb-4 space-y-3 text-sm bg-white border-t border-gray-200 shadow"
    role="menu"
    aria-label="Mobile Navigation"
    onKeyDown={onDropdownKeyDown}
  >
    {navItems.map(({ label, href, dropdown, items }) =>
      dropdown ? (
        <details key={label} className="group" role="none">
          <summary
            className="flex items-center justify-between cursor-pointer py-2 text-gray-800 font-medium"
            role="menuitem"
            tabIndex={0}
          >
            <span>{label}</span>
            <span
              aria-hidden="true"
              className="ml-2 transition-transform group-open:rotate-180"
            >
              ▾
            </span>
          </summary>

          {/* Mobile Dropdown Content */}
          <div className="pl-4 mt-2 space-y-3">
            {label === 'Solutions' && (
              <>
                <Link
                  href="/Solutions"
                  className="text-black hover:underline block py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Solutions
                </Link>

                <Link
                  href="/OurProducts"
                  className="text-black hover:underline block py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Our Products
                </Link>

                <Link
                  href="/industry"
                  className="text-black hover:underline block py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Industry Focus
                </Link>
              </>
            )}

            {label !== 'Solutions' &&
              items?.map(({ label: itemLabel, href: itemHref }) => (
                <Link
                  key={itemLabel}
                  href={itemHref}
                  className="block py-1 text-gray-800 hover:text-blue-700 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {itemLabel}
                </Link>
              ))}
          </div>
        </details>
      ) : (
        <Link
          key={label}
          href={href}
          className={`block py-2 font-medium ${
            pathname === href ? 'text-blue-700' : 'text-gray-800'
          } hover:text-blue-700`}
          role="menuitem"
          onClick={() => setMobileMenuOpen(false)}
        >
          {label}
        </Link>
      )
    )}

    {/* Contact Us button */}
    <Link
      href="/contectus"
      className="inline-block w-full text-center bg-blue-700 text-white py-2 rounded-md font-semibold hover:bg-blue-800 transition-colors"
      role="menuitem"
      onClick={() => setMobileMenuOpen(false)}
    >
      Contact Us
    </Link>

    {/* Social Icons */}
    <div className="flex justify-center space-x-4 mt-4">
      {[
        { src: 'https://cdn-icons-png.flaticon.com/512/733/733547.png', alt: 'Facebook', href: 'https://facebook.com/company' },
        { src: 'https://cdn-icons-png.flaticon.com/512/733/733561.png', alt: 'LinkedIn', href: 'https://linkedin.com/company/company' },
        { src: 'https://cdn-icons-png.flaticon.com/512/733/733558.png', alt: 'Instagram', href: 'https://instagram.com/company' },
        { src: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png', alt: 'YouTube', href: 'https://youtube.com/@company' },
      ].map(({ src, alt, href }, idx) => (
        <a
          key={idx}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Follow us on ${alt}`}
          className="focus:outline-none focus:ring-2 focus:ring-blue-600 rounded p-1 hover:bg-gray-100 transition-colors"
        >
          <div className="relative w-5 h-5">
            <Image
              src={src}
              alt={alt}
              fill
              className="hover:opacity-80 transition-opacity object-contain"
            />
          </div>
        </a>
      ))}
    </div>
  </div>
)}




    </nav>
  );
}

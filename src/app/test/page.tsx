'use client';

import { useState, useEffect, useRef, type KeyboardEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

/* ================= TYPES ================= */

type NavItem = {
  label: string;
  href: string;
  dropdown?: boolean;
  items?: { label: string; href: string }[];
};

/* ================= DATA ================= */

const navigationItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '/Aboutus',
    dropdown: true,
    items: [
      { label: 'Why Us', href: '/WhyUs' },
      { label: 'Careers', href: '/Careers' },
      { label: 'About Us', href: '/Aboutus' },
    ],
  },
  {
    label: 'Solutions',
    href: '/Solutions',
    dropdown: true,
  },
  { label: 'Get Started', href: '/contectus' },
];

/* ================= HOOK ================= */

function useOutsideClick(ref: React.RefObject<HTMLElement>, callback: () => void) {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [callback]);
}

/* ================= MAIN ================= */

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const lastScroll = useRef(0);

  useOutsideClick(dropdownRef, () => setOpenDropdown(null));

  /* Scroll hide */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastScroll.current && y > 120);
      lastScroll.current = y;
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 h-20 bg-white shadow transition-transform duration-300 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="mx-auto max-w-7xl h-full flex items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center h-full">
          <Image src="/logo1.png" alt="Logo" width={160} height={64} priority />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6">
          {navigationItems.map((item) => (
            <DesktopNavItem
              key={item.label}
              item={item}
              pathname={pathname}
              openDropdown={openDropdown}
              setOpenDropdown={setOpenDropdown}
              dropdownRef={dropdownRef}
            />
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/contectus"
          className="hidden md:inline-block bg-blue-700 text-white px-5 py-2 rounded hover:bg-blue-800"
        >
          Contact Us
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          ☰
        </button>
      </div>

      <MobileMenu isOpen={isMobileOpen} pathname={pathname} />
    </nav>
  );
}

/* ================= DESKTOP ================= */

function DesktopNavItem({
  item,
  pathname,
  openDropdown,
  setOpenDropdown,
  dropdownRef,
}: any) {
  const active = item.dropdown
    ? pathname.startsWith(item.href)
    : pathname === item.href;

  return (
    <li
      className="relative"
      onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
      onMouseLeave={() => setOpenDropdown(null)}
    >
      <Link
        href={item.href}
        className={`flex items-center gap-1 font-medium ${
          active ? 'text-blue-700' : 'text-gray-800'
        } hover:text-blue-700`}
      >
        {item.label}
        {item.dropdown && <span>▾</span>}
      </Link>

      {item.dropdown && (
        <Dropdown
          label={item.label}
          isOpen={openDropdown === item.label}
          items={item.items}
          refEl={dropdownRef}
        />
      )}
    </li>
  );
}

/* ================= DROPDOWN ================= */

function Dropdown({ label, isOpen, items, refEl }: any) {
  return (
    <div
      ref={refEl}
      className={`fixed top-20 left-0 right-0 bg-white shadow-xl transition ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <div className="mx-auto max-w-7xl px-8 py-10 grid grid-cols-3 gap-10">
        {label === 'Solutions' ? <Solutions /> : <About items={items} />}
      </div>
    </div>
  );
}

/* ================= SOLUTIONS ================= */

function Solutions() {
  return (
    <>
      <section>
        <h4 className="font-bold mb-3">Solutions</h4>
        <ul className="space-y-2">
          {[
            'Community Management',
            'Performance Marketing',
            'Web Development',
            'Brand Strategy',
          ].map((s) => (
            <li key={s}>
              <Link href="/Solutions" className="hover:text-blue-700">
                {s}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h4 className="font-bold mb-3">Products</h4>
        <ul className="grid grid-cols-2 gap-4">
          {['FORSA HR', 'FORSA ERP', 'EDUCATUM', 'AIMS ERP'].map((p) => (
            <li key={p} className="border p-3 rounded text-center">
              {p}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-gray-100 p-4 rounded">
        <h4 className="font-bold mb-3">Industry Focus</h4>
        <ul className="space-y-2">
          <li>Healthcare</li>
          <li>Manufacturing</li>
          <li>Finance</li>
        </ul>
      </section>
    </>
  );
}

/* ================= ABOUT ================= */

function About({ items }: any) {
  return (
    <>
      <div>
        <h3 className="text-xl font-bold">
          Simplifying IT & Digital Transformation
        </h3>
      </div>

      <div>
        <h4 className="font-bold mb-3">Explore</h4>
        {items?.map((i: any) => (
          <Link key={i.label} href={i.href} className="block py-1 hover:text-blue-700">
            {i.label}
          </Link>
        ))}
      </div>

      <div className="bg-gray-100 p-4 rounded">
        <h4 className="font-bold mb-3">Clients</h4>
        <ul className="space-y-2">
          <li>Johnson & Johnson</li>
          <li>Hanif Jewellers</li>
          <li>IVYCMS</li>
        </ul>
      </div>
    </>
  );
}

/* ================= MOBILE ================= */

function MobileMenu({ isOpen, pathname }: any) {
  return (
    <div
      className={`md:hidden fixed top-20 inset-x-0 bg-white shadow transition ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <div className="p-6 space-y-4">
        {navigationItems.map((i) => (
          <Link
            key={i.label}
            href={i.href}
            className={`block font-medium ${
              pathname === i.href ? 'text-blue-700' : ''
            }`}
          >
            {i.label}
          </Link>
        ))}

        <Link
          href="/contectus"
          className="block bg-blue-700 text-white py-3 text-center rounded"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

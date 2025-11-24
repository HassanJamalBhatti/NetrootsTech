"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AdvertisementModal() {
  const [open, setOpen] = useState(false);

  // Auto open after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-[9999]"
    >
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white w-[90%] max-w-lg rounded-2xl shadow-2xl p-6 relative overflow-hidden"
      >
        {/* CLOSE BUTTON */}
        <button
          className="absolute top-3 right-3 -mr-0 -mt-1 text-black text-xl font-bold"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

        {/* Banner Image */}
        <div className="w-full h-48 relative rounded-lg overflow-hidden">
          <Image
            src="/25.png" // CHANGE THIS IMAGE
            alt="Advertisement"
            fill
            className="object-cover"
          />
        </div>

        {/* Text */}
        <h2 className="text-xl font-bold mt-4 text-center">
          Special Offer For Your Business!
        </h2>
        <p className="text-center text-gray-700 mt-2">
          Get up to <strong>30% OFF</strong> on our IT Services for a limited time.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => window.location.replace('/contectus')}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md"
          >
            Get Offer Now
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

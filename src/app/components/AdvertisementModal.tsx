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
      className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center z-[9999]"
    >
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative bg-white w-[90%] max-w-lg rounded-2xl shadow-2xl p-6
                   border border-blue-400 shadow-blue-600/40 
                   animate-glow overflow-hidden"
      >
        {/* SHINY GLOW BORDER EFFECT */}
        <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-borderGlow"></div>

        {/* CLOSE BUTTON */}
        <button
          className="absolute top-3 right-3 text-black text-xl font-bold hover:scale-110 transition-all"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

        {/* Banner Image */}
        <div className="w-full h-48 relative rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/25.png"
            alt="Advertisement"
            fill
            className="object-cover rounded-lg animate-imagePulse"
          />
        </div>

        {/* Text */}
        <h2 className="text-2xl font-extrabold mt-5 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Special Offer For Your Business!
        </h2>

        <p className="text-center text-gray-700 mt-2 animate-fadeInSlow">
          Get up to <strong>30% OFF</strong> on our IT Services for a limited time.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center mt-5">
          <button
            onClick={() => window.location.replace("/contectus")}
            className="px-6 py-2.5 rounded-full text-white font-semibold shadow-lg
                       bg-gradient-to-r from-blue-600 to-purple-600 
                       hover:from-blue-700 hover:to-purple-700
                       transition-all hover:scale-105 animate-pulseSlow"
          >
            Get Offer Now
          </button>
        </div>
      </motion.div>

      {/* Tailwind Animations */}
      <style>{`
        .animate-glow {
          animation: glow 2.5s ease-in-out infinite alternate;
        }

        @keyframes glow {
          0% { box-shadow: 0 0 20px rgba(0, 140, 255, 0.6); }
          100% { box-shadow: 0 0 35px rgba(188, 24, 255, 0.8); }
        }

        .animate-borderGlow {
          animation: borderGlow 3s linear infinite;
        }

        @keyframes borderGlow {
          0% { opacity: 0.3; }
          50% { opacity: 1; }
          100% { opacity: 0.3; }
        }

        .animate-imagePulse {
          animation: imagePulse 3s ease-in-out infinite;
        }

        @keyframes imagePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .animate-pulseSlow {
          animation: pulseSlow 2.8s infinite;
        }

        @keyframes pulseSlow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.07); }
        }

        .animate-fadeInSlow {
          animation: fadeInSlow 1.5s ease-out;
        }

        @keyframes fadeInSlow {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </motion.div>
  );
}

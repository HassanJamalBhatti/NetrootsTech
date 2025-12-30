import { Suspense } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactClient from "./ContactClient";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
        <ContactClient />
      </Suspense>

      <Footer />
    </div>
  );
}

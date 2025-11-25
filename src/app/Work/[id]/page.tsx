"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ContactUs from "@/app/components/ContactUs";

// Load Inter font
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const testimonials = [
  {
    id: "1",
    rating: 4.5,
    title: "Best Decision Ever",
    text: "Netroots Technologies provided us with the best ERP solution to manage our business. We highly recommend their ERP software. It is one of the most customized ERP systems available. The platform is intuitive and efficient. It has truly transformed the way we operate.",
    author: "Hanif Jewelers",
    img: "/clients/hanif.png",
  },
  {
    id: "2",
    rating: 4.9,
    title: "Amazing Support!",
    text: "Dining at American Greatest Restaurant is an unforgettable experience! From the first bite to the last, every dish bursts with flavor. The ambiance is warm and inviting, perfect for family and friends. The staff is attentive and truly makes you feel valued. We highly recommend it to anyone seeking top-notch cuisine and service.",
    author: "American Greatest",
    img: "/clients/AGW.png",
  },
  {
    id: "3",
    rating: 4.5,
    title: "Extremely Recommended",
    text: "We wanted to expand our business and wanted to outshine our standing in the market, thus we chose Netroots Technologies. Well, the results were very interesting and surprising. We are glad that we landed on Netroots Technologies page and have attained such Digital Marketing Services, which include Social Media Marketing.",
    author: "California Pizza",
    img: "/clients/CaliforniaPizza.png",
  },
  {
    id: "4",
    rating: 4.1,
    title: "Business Friendly",
    text: "As an Educational Institute we were so glad to attain the product Educatum from Netroots Technologies. This is very helpful in managing the data. Also in an affordable package, they rendered us with Social Media Marketing Services along with SEO Services. Netroots Technologies not only made us outshine the market but in fact, they improved our Digital worth.",
    author: "IVY",
    img: "/clients/IVYA.png",
  },
  {
    id: "5",
    rating: 4.5,
    title: "Best People for me!",
    text: "Flour mills in Pakistan mostly operate in the traditional way, using manual records. We are glad that we made the switch. It was becoming difficult to keep record of and manually manage production and tracking, and our ERP solved those problems. Our ERP also includes HR functions such as payroll and employee asset management. This makes keeping account of our finances much easier!",
    author: "Sufi Flour Mills",
    img: "/clients/SufiAtaa.png",
  },
];

// Render stars
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) stars.push(<FaStar key={i} className="text-yellow-400" />);
    else if (rating >= i - 0.5)
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
    else stars.push(<FaRegStar key={i} className="text-gray-300" />);
  }
  return stars;
};

interface Props {
  params: Promise<{ id: string }>;
}

export default function TestimonialDetail({ params }: Props) {
  const resolvedParams = use(params);
  const testimonial = testimonials.find((t) => t.id === resolvedParams.id);

  if (!testimonial)
    return <p className="text-center mt-20 font-inter">Testimonial not found.</p>;

  return (
    <div className={inter.className}>
      {/* Header */}
      <header className="bg-gradient-to-r  mt-20 from-[#00C4B4] to-[#0070F3] text-white py-8 text-center">
        <h1 className="text-4xl font-bold">Client Testimonials</h1>
        <p className="mt-2 text-lg">See what our clients say about us</p>
      </header>

      <Navbar />

      <main className="py-16 px-6 md:px-20 bg-[#f9f9f9] ">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Image
              src={testimonial.img}
              width={120}
              height={120}
              alt={testimonial.author}
              className="rounded-full shadow-md"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{testimonial.title}</h1>
              <div className="flex items-center gap-2 text-lg mb-2">
                {renderStars(testimonial.rating)}
                <span className="text-gray-700 font-semibold">{testimonial.rating}</span>
              </div>
              <p className="text-gray-600 font-medium">{testimonial.author}</p>
            </div>
          </div>

          <div className="mt-6 text-gray-700 text-justify leading-relaxed">{testimonial.text}</div>

          <div className="mt-6">
            <Link href="/#work" className="text-blue-600 font-semibold hover:underline">
              Back to Testimonials
            </Link>
          </div>
        </div>

        
   
      </main>

    
        <ContactUs />
        <Footer />
    </div>
  );
}

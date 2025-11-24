"use client";

import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const testimonials = [
  {
    rating: 4.5,
    title: "A Wonderful Experience!",
    text: "We acquired an HR system from NetRoots, and have found it to exceed expectations. NetRoots was able to customize our software down to a T, creating for us a solution that addressed ",
    author: "Cornerstone School",
    img: "/logo.png",
    link: "/testimonials/1",
  },
  {
    rating: 4.9,
    title: "Amazing Support!",
    text: "The best thing about the company was that their team worked closely with us to figure out what we needed and then made us exactly that. Truly personalized support every step of the",
    author: "Greenfield Academy",
    img: "/logo.png",
    link: "/testimonials/2",
  },
  {
    rating: 3.5,
    title: "Exceeded Expectations!",
    text: "We acquired an HR system from NetRoots, and have found it to exceed expectations. Amazing support and customization! Their team was proactive in solving all our concerns quickly.",
    author: "Sunrise Institute",
    img: "/logo.png",
    link: "/testimonials/3",
  },
  {
    rating: 4.1,
    title: "Highly Recommend!",
    text: "NetRoots delivered a solution that perfectly fit our HR needs. The software is intuitive, and the team provided exceptional guidance throughout the process. Couldn't be happier.",
    author: "Blue Valley School",
    img: "/logo.png",
    link: "/testimonials/4",
  },
  {
    rating: 4.5,
    title: "Professional & Efficient",
    text: "Working with NetRoots was a seamless experience. They provided an end-to-end solution for our HR system needs, always responsive, always helpful. Highly professional.",
    author: "Riverdale College",
    img: "/logo.png",
    link: "/testimonials/5",
  },
];

const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-gray-300" />);
    }
  }
  return stars;
};


export default function TestimonialCarousel() {
  return (
    <div className="py-16 bg-[#f9f9f9]">
      <div className="text-center mb-12">
        <p className="text-[#00C4B4] font-semibold mb-2">
          {"//"} <span className="text-[#123456]">Testimonials</span>
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">
          Testimonials:{" "}
          <span className="text-[#0070F3]">Trusted by Our Clients</span>
        </h2>
      </div>

      <Swiper
        modules={[Pagination, Autoplay, EffectCoverflow]}
        slidesPerView={3}
        spaceBetween={24}
        pagination={{ clickable: true }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 30,
          slideShadows: false,
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="px-4 md:px-10 bg-[#f9f9f9]"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="shadow-lg rounded-xl p-6 bg-[#f9f9f9] border border-gray-200 h-full flex flex-col justify-between">
              
              {/* ⭐ Stars */}
              <div className="flex items-center mb-3 text-xl">
                <div className="flex gap-1 text-yellow-400">
                  {renderStars(t.rating)}
                </div>
                <span className="ml-2 text-black font-semibold">
                  {t.rating}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg mb-2">{t.title}</h3>

              {/* Description */}
              <p className="text-sm text-gray-700 leading-relaxed text-justify line-clamp-5">
                {t.text}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center gap-3">
                  <Image
                    src={t.img}
                    width={40}
                    height={40}
                    alt="logo"
                    className="rounded-full"
                  />
                  <p className="font-medium text-gray-800">{t.author}</p>
                </div>
                <Link
                  href={t.link}
                  className="text-sm font-semibold text-[#0070F3] hover:underline"
                >
                  Read More
                </Link>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

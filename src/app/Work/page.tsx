"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const testimonials = [
  {
    rating: 4.5,
    title: "Best Decision Ever",
    text: "Netroots Technologies provided us with the best ERP solution to manage our business. We highly recommend their ERP software. It is one of the most customized ERP systems available. The platform is intuitive and efficient. It has truly transformed the way we operate.",
    author: "Hanif Jewelers",
    img: "/clients/hanif.png",
    link: "/Work/1",
  },
  {
    rating: 4.9,
    title: "Amazing Business Support!",
    text: "Netroots Technologies has been instrumental in driving the growth of our business. Their ERP solutions and digital services have streamlined our operations, improved efficiency, and allowed us to focus on expanding our reach. Their support is unmatched, and we highly recommend Netroots for any business looking to grow and succeed.",
    author: "American Greatest Wings",
    img: "/clients/AGW.png",
    link: "/Work/2",
   },
  {
    rating: 4.5,
    title: "Extremely Recommended",
    text: "We wanted to expand our business and wanted to outshine our standing in the market, thus we chose Netroots Technologies. Well, the results were very interesting and surprising. We are glad that we landed on Netroots Technologies page and have attained such Digital Marketing Services, which include Social Media Marketing.",
    author: "California Pizza",
    img: "/clients/CaliforniaPizza.png",
    link: "/Work/3",
  },
  {
    rating: 4.1,
    title: "Business Friendly",
    text: "As an Educational Institute we were so glad to attain the product Educatum from Netroots Technologies. This is very helpful in managing the data. Also in an affordable package, they rendered us with Social Media Marketing Services along with SEO Services. Netroots Technologies not only made us outshine the market but in fact, they improved our Digital worth.",
    author: "IVY",
    img: "/clients/IVYA.png",
    link: "/Work/4",
  },
  {
    rating: 4.5,
    title: "Best People for me!",
    text: "Flour mills in Pakistan mostly operate in the traditional way, using manual records. We are glad that we made the switch. It was becoming difficult to keep record of and manually manage production and tracking, and our ERP solved those problems. Our ERP also includes HR functions such as payroll and employee asset management. This makes keeping account of our finances much easier!",
    author: "Sufi Flour Mills",
    img: "/clients/SufiAtaa.png",
    link: "/Work/5",
  },
];

// Render stars
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

export default function TestimonialCarousel() {
  return (
    <section className="py-16 bg-[#f9f9f9]">
      <div className="text-center mb-12">
        <p className="text-[#00C4B4] font-semibold mb-2">
          {"//"} <span className="text-[#123456]">Testimonials</span>
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">
          Trusted by Our Clients
          <span className="text-[#0070F3]"> Worldwide</span>
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
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={false}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="px-4 md:px-10"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={`testimonial-${i}`}>
            {/* Add pointer-events auto to enable links */}
            <div className="shadow-lg rounded-xl p-6 bg-white border border-gray-200 h-full flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300 pointer-events-auto">
              {/* Stars */}
              <div className="flex items-center mb-3 text-xl">
                <div className="flex gap-1">{renderStars(t.rating)}</div>
                <span className="ml-2 text-black font-semibold">{t.rating}</span>
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
                    width={50}
                    height={50}
                    alt={`${t.author} logo`}
                    className="rounded-full"
                  />
                  <p className="font-medium text-gray-800">{t.author}</p>
                </div>

                {/* Fixed Link */}
                <Link
                  href={t.link}
                  className="text-sm font-semibold text-[#0070F3] hover:underline z-10"
                >
                  Read More
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

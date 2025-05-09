import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronRight, ChevronLeft } from "lucide-react";

const categories = [
  {
    label: "ADVENTURE",
    image: "https://m.media-amazon.com/images/I/814wiNkz6aL._AC_UL320_.jpg",
  },
  {
    label: "CLASSIC FICTION",
    image: "https://m.media-amazon.com/images/I/914zwN4sVvL._AC_UL320_.jpg",
  },
  {
    label: "FANTASY",
    image: "https://m.media-amazon.com/images/I/9162XD-gj+L._AC_UL320_.jpg",
  },
  {
    label: "MODERN FICTION",
    image: "https://m.media-amazon.com/images/I/91F1q7N51WL._AC_UL320_.jpg",
  },
  {
    label: "ROMANCE",
    image: "https://m.media-amazon.com/images/I/91gvAqJI-+L._AC_UL320_.jpg",
  },
  {
    label: "SCIENCE FICTION",
    image: "https://m.media-amazon.com/images/I/81BIQmB2z-L._AC_UL320_.jpg",
  },
  {
    label: "THRILLER",
    image: "https://m.media-amazon.com/images/I/81otAfGTKNL._AC_UL320_.jpg",
  },
];

const TopCategories = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      swiperRef.current.params.navigation
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section className="relative py-10 bg-gradient-to-r from-slate-100 to-gray-300 ">
      <h2 className="text-center text-2xl font-semibold text-secondary mb-8">
        Top Categories
      </h2>

      <div className="group relative px-5 max-w-7xl mx-auto">
        <Swiper
          modules={[Navigation]}
          loop={true}
          slidesPerView={1.5}
          spaceBetween={20}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            640: { slidesPerView: 2.5 },
            768: { slidesPerView: 3.5 },
            1024: { slidesPerView: 5 },
          }}
        >
          {categories.map((cat, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center text-center">
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden transition-transform hover:animate-[wiggle_1s_ease-in-out]">
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className="object-cover h-full w-full"
                    loading="lazy"
                  />
                </div>
                <span className="mt-3 text-xs font-medium text-green-900">
                  {cat.label}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button
          ref={prevRef}
          className="top-categories-prev absolute top-1/2 left-0 -translate-y-1/2 hidden group-hover:block z-10"
        >
          <ChevronLeft className="w-8 h-8 text-gray-700 hover:text-secondary" />
        </button>
        <button
          ref={nextRef}
          className="top-categories-next absolute top-1/2 right-0 -translate-y-1/2 hidden group-hover:block z-10"
        >
          <ChevronRight className="w-8 h-8 text-gray-700 hover:text-secondary" />
        </button>
      </div>
    </section>
  );
};

export default TopCategories;

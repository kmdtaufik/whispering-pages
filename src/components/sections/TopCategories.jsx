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
    <section className="relative py-10 bg-[url(https://bookio.wpbingosite.com/wp-content/uploads/2021/07/img1-11.jpg)] bg-cover bg-center">
      <h2 className="text-center text-xl md:text-2xl font-bold font-primary text-secondary mb-8 px-4">
        Top Categories
      </h2>

      <div className="group relative px-4 md:px-5 max-w-7xl mx-auto">
        <Swiper
          modules={[Navigation]}
          loop={true}
          slidesPerView={1.5}
          spaceBetween={20}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            480: { slidesPerView: 2.5, spaceBetween: 15 },
            640: { slidesPerView: 3.5, spaceBetween: 20 },
            768: { slidesPerView: 4.5, spaceBetween: 20 },
            1024: { slidesPerView: 5, spaceBetween: 25 },
          }}
        >
          {categories.map((cat, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full bg-white shadow-lg flex items-end justify-center overflow-hidden transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-400/50 cursor-pointer">
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className="h-[80%] w-auto object-contain transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <span className="mt-3 font-secondary font-bold text-xs md:text-sm text-green-900 transition-colors duration-200 hover:text-secondary px-2 text-center">
                  {cat.label}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button
          ref={prevRef}
          className="top-categories-prev absolute top-1/2 left-0 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 bg-white/80 rounded-full p-2 shadow-md hover:bg-white hover:shadow-lg"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700 hover:text-secondary transition-colors duration-200" />
        </button>
        <button
          ref={nextRef}
          className="top-categories-next absolute top-1/2 right-0 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 bg-white/80 rounded-full p-2 shadow-md hover:bg-white hover:shadow-lg"
        >
          <ChevronRight className="w-6 h-6 text-gray-700 hover:text-secondary transition-colors duration-200" />
        </button>
      </div>
    </section>
  );
};

export default TopCategories;

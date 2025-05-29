import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

const books = [
  {
    id: 1,
    image:
      "https://bookio.wpbingosite.com/wp-content/uploads/2021/07/img1-6-1.jpg",
    title: "FANTASIA",
    subtitle: "The 5th Thesis Design Graduation Exhibition",
    caption: "50% Off This Week Only",
  },
  {
    id: 2,
    image:
      "https://bookio.wpbingosite.com/wp-content/uploads/2021/08/img1-8-1.jpg",
    title: "A Kids Book About...",
    subtitle: "Creativity, Racism, Belonging, and Adventure",
    caption: "New Arrival — Inspire Young Minds",
  },
  {
    id: 3,
    image:
      "https://bookio.wpbingosite.com/wp-content/uploads/2021/08/img1-7-1.jpg",
    title: "George Orwell",
    subtitle: "Revolução dos Bichos & More",
    caption: "Classic Collection Now Available",
  },
  {
    id: 4,
    image:
      "https://bookio.wpbingosite.com/wp-content/uploads/2021/08/img1-8-1.jpg",
    title: "Children’s Literature",
    subtitle: "A Journey Through Classic Stories",
    caption: "Limited Edition Print",
  },
];

const BookShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Rebind navigation after refs are available
  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className="w-full bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="relative">
          <Swiper
            onSwiper={setSwiperInstance}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            spaceBetween={30}
            loop={true}
            modules={[Navigation]}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 3,
              },
            }}
            className="group"
          >
            {books.map((book) => (
              <SwiperSlide key={book.id} className="relative">
                <img
                  src={book.image}
                  alt={book.title}
                  className=" md:w-[586px] md:h-[356px] object-cover h-auto w-auto"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button
            ref={prevRef}
            className="absolute top-1/2 left-[10%] z-10 -translate-y-1/2 p-2 bg-white rounded-full shadow hover:bg-gray-100"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            ref={nextRef}
            className="absolute top-1/2 right-[10%] z-10 -translate-y-1/2 p-2 bg-white rounded-full shadow hover:bg-gray-100"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Caption Section */}
        <div className="text-center mt-10 transition-all duration-300">
          <h2 className="text-4xl font-bold text-green-900 font-primary">
            {books[activeIndex].caption}
          </h2>
          <p className="text-gray-600 mt-2">
            <span className="font-semibold text-lg font-secondary">
              {books[activeIndex].title}
            </span>{" "}
            — {books[activeIndex].subtitle}
          </p>
          <button className="mt-6 bg-white text-secondary font-secondary px-6 py-2 rounded hover:bg-green-800 hover:text-white transition-ease-in-out duration-300">
            Explore now →
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookShowcase;

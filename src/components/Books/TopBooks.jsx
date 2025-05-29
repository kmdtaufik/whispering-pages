import React, { useRef, useEffect, useState } from "react";
import BookCard from "./BookCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Iconify from "../Iconify/Iconify";

const books = [
  {
    title: "Healed New Life",
    subtitle: "How cancer gave me a life",
    author: "Alyce Kris",
    price: 90,
    originalPrice: 100,
    image: "BookCovers/pexels-photo-256450.jpeg",
    discount: 10,
    rating: 5,
    reviews: 1,
    isHot: true,
    isOutOfStock: false,
  },
  {
    title: "The Art of Fashion",
    author: "Alec Hansen",
    price: "200.00",
    image: "BookCovers/pexels-photo-904620.jpeg",
    discount: null,
    rating: 5,
    reviews: 1,
    isHot: true,
    isOutOfStock: false,
  },
  {
    title: "Africa Rising",
    author: "Norene Mayert",
    price: 125,
    originalPrice: 130,
    image: "BookCovers/pexels-photo-2228582.jpeg",
    discount: 4,
    rating: 5,
    reviews: 2,
    isHot: true,
    isOutOfStock: false,
  },
  {
    title: "Life is What You Make It",
    author: "Glenna Berge",
    price: 100,
    originalPrice: 120,
    image: "BookCovers/pexels-photo-2386687.jpeg",
    discount: 17,
    rating: 5,
    reviews: 2,
    isHot: true,
    isOutOfStock: true,
  },
  {
    title: "100 Selected Poems",
    author: "Alyce Kris",
    price: 350,
    originalPrice: 400,
    image: "BookCovers/pexels-photo-6475044.jpeg",
    discount: 13,
    rating: 4,
    reviews: 2,
    isHot: true,
    isOutOfStock: false,
  },
  {
    title: "The Journey Within",
    author: "John Doe",
    price: 150,
    originalPrice: 180,
    image:
      "BookCovers/free-photo-of-vintage-pocket-watch-and-book-still-life.jpeg",
    discount: 17,
    rating: 4,
    reviews: 3,
    isHot: false,
    isOutOfStock: false,
  },
  {
    title: "Mindful Living",
    author: "Jane Smith",
    price: 200,
    originalPrice: 250,
    image: "BookCovers/pexels-photo-374016.jpeg",
    discount: 20,
    rating: 5,
    reviews: 5,
    isHot: true,
    isOutOfStock: false,
  },
  {
    title: "The Future of AI",
    author: "Elon Stark",
    price: 300,
    originalPrice: 350,
    image: "BookCovers/pexels-photo-3184325.jpeg",
    discount: 14,
    rating: 4,
    reviews: 4,
    isHot: false,
    isOutOfStock: false,
  },
  {
    title: "Cooking Made Easy",
    author: "Chef Ramsey",
    price: 120,
    originalPrice: 150,
    image: "BookCovers/pexels-photo-17849668.webp",
    discount: 20,
    rating: 5,
    reviews: 10,
    isHot: true,
    isOutOfStock: false,
  },
  {
    title: "Travel Diaries",
    author: "Wander Lust",
    price: 180,
    originalPrice: 200,
    image: "BookCovers/pexels-photo-14097126.jpeg",
    discount: 10,
    rating: 4,
    reviews: 6,
    isHot: false,
    isOutOfStock: true,
  },
];

export default function TopBooks() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (
      swiperInstance &&
      prevRef.current &&
      nextRef.current &&
      !swiperInstance.destroyed
    ) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <section className="container mx-auto">
      <div>
        <span className="text-secondary py-5 my-1.5 mx-5 font-primary text-2xl font-bold ">
          Top Books!
        </span>
      </div>

      <div className="group/one flex items-center">
        {/* Left Nav Button */}
        <button ref={prevRef} className="pr-3">
          <Iconify
            icon="simple-line-icons:arrow-left"
            className="group/one-hover:text-gray-500 hover:text-black text-transparent transition duration-300 ease-in-out"
          />
        </button>

        <Swiper
          onSwiper={setSwiperInstance}
          modules={[Navigation]}
          loop={true}
          spaceBetween={20}
          slidesPerView={2}
          centeredSlides={true}
          className="mySwiper my-5 "
          breakpoints={{
            1024: {
              slidesPerView: 6,
              centeredSlides: false,
            },
          }}
        >
          {books.map((book, index) => (
            <SwiperSlide key={index}>
              <BookCard {...book} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Right Nav Button */}
        <button ref={nextRef} className="pl-3">
          <Iconify
            icon="simple-line-icons:arrow-right"
            className="group/one-hover:text-gray-500 hover:text-black text-transparent transition duration-300 ease-in-out"
          />
        </button>
      </div>
    </section>
  );
}

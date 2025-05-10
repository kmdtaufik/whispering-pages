import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    bgImage:
      "https://bookio.wpbingosite.com/wp-content/uploads/2021/08/slider1-2.jpg",
    titleTop: "Support",
    titleHighlight: "Local",
    titleEnd: "Bookstores.",
    subtitle: "$15,343,695.75 raised for local bookstores",
    cta: "MEET OUR BESTSELLER →",
  },
  {
    bgImage:
      "https://bookio.wpbingosite.com/wp-content/uploads/2021/08/slider1-3.jpg",
    titleTop: "Bestselling",
    titleHighlight: "Fiction",
    titleEnd: "Books",
    subtitle: "Over 120,000 Trustpilot reviews",
    cta: "MEET OUR BESTSELLER →",
  },
  {
    bgImage:
      "https://bookio.wpbingosite.com/wp-content/uploads/2021/08/slider1-1.jpg",
    titleTop: "Explore",
    titleHighlight: "New",
    titleEnd: "Arrivals",
    subtitle: "Handpicked titles updated weekly",
    cta: "DISCOVER MORE →",
  },
];

const SlideShow = () => {
  const [current, setCurrent] = useState(0);
  // const [isClient, setIsClient] = useState(false);
  const length = slides.length;
  const intervalRef = useRef(null);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + length) % length);

  useEffect(() => {
    // setIsClient(true);
    intervalRef.current = setInterval(nextSlide, 7000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="relative overflow-hidden group md:h-[90vh] w-full h-[25vh]">
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="min-w-full h-full relative "
            style={{
              backgroundImage: `url(${slide.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 md:px-16 text-secondary text-center sm:text-left">
              <div className="max-w-[90%] sm:max-w-md mx-auto sm:mx-0 sm:max-h-md">
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
                  <span>{slide.titleTop} </span>
                  <span className="text-primary underline">
                    {slide.titleHighlight}
                  </span>
                  <br />
                  <span>{slide.titleEnd}</span>
                </h1>
                <p className="mt-3 text-sm sm:text-base text-gray-200">
                  {slide.subtitle}
                </p>
                <button className="mt-4 bg-orange-600 hover:bg-orange-700 text-white text-xs sm:text-sm font-semibold px-4 sm:px-6 py-2 rounded w-fit">
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition z-10"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition z-10"
      >
        <ChevronRight />
      </button>

      {/* Pagination */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-1 rounded-full inline-block cursor-pointer ${
              current === idx ? "bg-black" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SlideShow;

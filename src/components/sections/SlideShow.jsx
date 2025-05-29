import React, { useState, useEffect, useRef, useCallback } from "react";
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef(null);
  const slideContainerRef = useRef(null);

  const totalSlides = slides.length;

  // Memoized navigation functions
  const goToSlide = useCallback(
    (index) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentSlide(index);

      // Reset animation flag after transition
      setTimeout(() => setIsAnimating(false), 700);
    },
    [isAnimating]
  );

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    const next = (currentSlide + 1) % totalSlides;
    goToSlide(next);
  }, [currentSlide, totalSlides, goToSlide, isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    const prev = (currentSlide - 1 + totalSlides) % totalSlides;
    goToSlide(prev);
  }, [currentSlide, totalSlides, goToSlide, isAnimating]);

  // Auto-play functionality
  useEffect(() => {
    // Clear any existing interval first
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Only start auto-play if not currently animating
    if (!isAnimating) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 7000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [currentSlide, isAnimating, totalSlides]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide]);

  // Pause auto-play on hover
  const handleMouseEnter = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!isAnimating) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 7000);
    }
  }, [isAnimating, totalSlides]);

  return (
    <div
      className="relative overflow-hidden group md:h-[90vh] h-[50vh] w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="region"
      aria-label="Image slideshow"
    >
      {/* Slides Container */}
      <div
        ref={slideContainerRef}
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full h-full relative flex items-center"
            style={{
              backgroundImage: `url(${slide.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            role="img"
            aria-label={`Slide ${index + 1}: ${slide.titleTop} ${
              slide.titleHighlight
            } ${slide.titleEnd}`}
          >
            {/* Content with animated text dropping from above */}
            <div
              className={`ml-[10%] max-w-[90%] sm:max-w-md text-white transform transition-all duration-800 ease-out ${
                currentSlide === index
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-12 opacity-0"
              }`}
              style={{
                transitionDelay: currentSlide === index ? "200ms" : "0ms",
              }}
            >
              <h1 className="text-2xl sm:text-3xl md:text-6xl font-primary font-bold leading-tight mb-4">
                <span
                  className={`text-secondary inline-block transform transition-all duration-700 ease-out ${
                    currentSlide === index
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay: currentSlide === index ? "300ms" : "0ms",
                  }}
                >
                  {slide.titleTop}{" "}
                </span>
                <span
                  className={`text-primary underline font-primary font-bold inline-block transform transition-all duration-700 ease-out ${
                    currentSlide === index
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay: currentSlide === index ? "450ms" : "0ms",
                  }}
                >
                  {slide.titleHighlight}
                </span>
                <br />
                <span
                  className={`text-secondary font-primary inline-block transform transition-all duration-700 ease-out ${
                    currentSlide === index
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay: currentSlide === index ? "600ms" : "0ms",
                  }}
                >
                  {slide.titleEnd}
                </span>
              </h1>

              <p
                className={`text-sm sm:text-base font-secondary   text-gray-500 mb-6 leading-relaxed transform transition-all duration-600 ease-out ${
                  currentSlide === index
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-6 opacity-0"
                }`}
                style={{
                  transitionDelay: currentSlide === index ? "750ms" : "0ms",
                }}
              >
                {slide.subtitle}
              </p>

              <button
                className={`bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white text-xs sm:text-sm font-semibold px-4 sm:px-6 py-2 rounded w-fit transition-all duration-500 hover:transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-transparent transform ${
                  currentSlide === index
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-4 opacity-0"
                }`}
                style={{
                  transitionDelay: currentSlide === index ? "900ms" : "0ms",
                }}
                aria-label={slide.cta}
              >
                {slide.cta}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        disabled={isAnimating}
        className="hidden sm:flex absolute left-6 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={nextSlide}
        disabled={isAnimating}
        className="hidden sm:flex absolute right-6 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Slide Indicators */}
      <div
        className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10"
        role="tablist"
        aria-label="Slide navigation"
      >
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-1 rounded-full inline-block cursor-pointer transition-all duration-300 ${
              currentSlide === index ? "bg-black" : "bg-gray-400"
            } disabled:opacity-50 disabled:cursor-not-allowed`}
            role="tab"
            aria-selected={currentSlide === index}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20">
        <div
          className="h-full bg-orange-500 transition-all duration-300 ease-out"
          style={{
            width: `${((currentSlide + 1) / totalSlides) * 100}%`,
          }}
        />
      </div> */}
    </div>
  );
};

export default SlideShow;

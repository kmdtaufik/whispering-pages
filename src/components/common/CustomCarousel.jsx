import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CustomCarousel = ({
  children,
  slidesToShow = 6,
  slidesToScroll = 1,
  spaceBetween = 20,
  breakpoints = {},
  className = "",
  showNavigation = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShowCurrent, setSlidesToShowCurrent] = useState(slidesToShow);
  const carouselRef = useRef(null);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let newSlidesToShow = slidesToShow;

      // Apply breakpoints
      const sortedBreakpoints = Object.keys(breakpoints)
        .map(Number)
        .sort((a, b) => b - a);

      for (const breakpoint of sortedBreakpoints) {
        if (width >= breakpoint) {
          newSlidesToShow =
            breakpoints[breakpoint].slidesToShow || slidesToShow;
          break;
        }
      }

      setSlidesToShowCurrent(newSlidesToShow);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [slidesToShow, breakpoints]);

  const totalSlides = React.Children.count(children);
  const maxIndex = Math.max(0, totalSlides - slidesToShowCurrent);

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(prev + slidesToScroll, maxIndex));
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => Math.max(prev - slidesToScroll, 0));
  };

  const translateX = -(currentIndex * (100 / slidesToShowCurrent));

  return (
    <div className={`group relative ${className}`} ref={carouselRef}>
      {/* Navigation Buttons */}
      {showNavigation && (
        <>
          <button
            onClick={goToPrev}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 rounded-full shadow-md hover:bg-white hover:shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 disabled:opacity-0"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 hover:text-secondary transition-colors duration-200" />
          </button>
          <button
            onClick={goToNext}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 rounded-full shadow-md hover:bg-white hover:shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 disabled:opacity-0"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 hover:text-secondary transition-colors duration-200" />
          </button>
        </>
      )}

      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(${translateX}%)`,
            gap: `${spaceBetween}px`,
          }}
        >
          {React.Children.map(children, (child, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{
                width: `calc(${100 / slidesToShowCurrent}% - ${
                  (spaceBetween * (slidesToShowCurrent - 1)) /
                  slidesToShowCurrent
                }px)`,
              }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomCarousel;

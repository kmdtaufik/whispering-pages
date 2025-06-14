import React, { memo, useMemo, useState } from "react";
import Iconify from "../Iconify/Iconify";

const BookCard = ({
  title,
  subtitle,
  author,
  price,
  originalPrice,
  image,
  hoverImage,
  discount,
  rating,
  reviews,
  isHot,
  isOutOfStock,
  className = "", //Add custom classes
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Memoize the rating stars to avoid recalculating on every render
  const ratingStars = useMemo(
    () =>
      [1, 2, 3, 4, 5].map((i) => (
        <Iconify
          key={i}
          icon="material-symbols:star"
          className={rating >= i ? "text-amber-300" : "text-gray-300"}
        />
      )),
    [rating]
  );

  return (
    <div
      className={` group  relative bg-white   overflow-hidden w-full max-w-xs ${className}`}
    >
      {/* Discount/Hot Badge */}
      {(discount != null || isHot) && (
        <div className="absolute top-2 left-2 space-y-1 z-10">
          {discount != null && (
            <span className="bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded">
              -{discount}%
            </span>
          )}
          {isHot && (
            <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
              Hot
            </span>
          )}
        </div>
      )}
      {/* Wish  list Button */}
      <button className="absolute top-2 right-2 p-1 rounded-full shadow bg-white hover:bg-secondary transition z-10">
        <Iconify
          icon="mdi-light:heart"
          className="text-black transition-colors duration-300 hover:text-white"
        />
      </button>

      {/* Book Image */}
      <div className="relative">
        <img
          src={isHovered && hoverImage ? hoverImage : image}
          alt={title}
          className={`w-full h-48 md:h-80 lg:h-[448px] object-cover transition-transform duration-450 ${
            isOutOfStock ? "opacity-60" : ""
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
        {isOutOfStock && (
          <div className="absolute inset-0 flex items-center justify-center font-semibold text-lg">
            <span className="bg-gray-400 text-white font-secondary px-2 py-1 rounded">
              Out of Stock
            </span>
          </div>
        )}

        {/* Hover Options */}

        <div className="absolute bottom-0 left-0 right-0 origin-bottom transform scale-y-0 translate-y-4 group-hover:scale-y-100 group-hover:translate-y-0 transition-all duration-500 ease-out flex">
          {!isOutOfStock && (
            <button className="flex-1 h-12 bg-black text-white flex justify-center items-center hover:bg-secondary transition-all duration-300">
              <Iconify icon="solar:cart-line-duotone" />
            </button>
          )}
          {isOutOfStock && (
            <button className="flex-1 h-12 bg-black text-white flex justify-center items-center hover:bg-secondary transition-all duration-300">
              <Iconify icon="solar:arrow-right-outline" />
            </button>
          )}

          <button className="flex-1 h-12 bg-black text-white flex justify-center items-center hover:bg-secondary transition-all duration-300">
            <Iconify icon="mdi-light:eye" />
          </button>
        </div>
      </div>

      {/* Details */}
      <div className="p-3 md:p-4 text-center">
        {/* Icon-based Rating */}
        <div className="flex justify-center items-center space-x-0.5 mb-1">
          {ratingStars}
          <span className="text-gray-500 ml-1 text-xs">({reviews})</span>
        </div>

        <p className="text-gray-500 text-sm mb-1 font-secondary">
          By : {author}
        </p>
        <h3 className="font-semibold text-md font-primary text-secondary">
          {title}
        </h3>
        {subtitle && (
          <p className="text-gray-400 text-sm mb-1 italic font-secondary ">
            {subtitle}
          </p>
        )}
        <div className="space-x-2 mt-2">
          {originalPrice && (
            <span className="line-through text-gray-400 text-sm font-primary">
              ${originalPrice}
            </span>
          )}
          <span className="text-primary font-bold font-primary">${price}</span>
        </div>
      </div>
    </div>
  );
};

export default memo(BookCard);

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
      className={`border border-gray-200 relative bg-white rounded-lg shadow-md overflow-hidden w-full max-w-xs ${className}`}
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

      {/* Wishlist Icon */}
      <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow hover:bg-gray-200 z-10">
        <Iconify
          icon="fa:heart"
          className="text-gray-400 hover:text-secondary"
        />
      </button>

      {/* Book Image */}
      <div className="relative">
        <img
          src={isHovered && hoverImage ? hoverImage : image}
          alt={title}
          className="w-full h-62 object-cover transition-transform duration-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
        {isOutOfStock && (
          <div className="absolute inset-0 flex items-center justify-center text-red-800 font-semibold text-lg bg-white bg-opacity-75">
            Out Of Stock
          </div>
        )}

        {/* Hover Options */}
        {isHovered && !isOutOfStock && (
          <div className="absolute bottom-0 left-0 right-0  bg-transparent flex justify-around items-center py-2 transition-opacity duration-300">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              <Iconify icon={"solar:cart-line-duotone"}></Iconify>
            </button>
            <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
              <Iconify icon={"mdi-light:eye"}></Iconify>
            </button>
          </div>
        )}
      </div>

      {/* Details */}
      <div className="p-4 text-center">
        {/* Icon-based Rating */}
        <div className="flex justify-center items-center space-x-0.5 mb-1">
          {ratingStars}
          <span className="text-gray-500 ml-1 text-xs">({reviews})</span>
        </div>

        <p className="text-gray-500 text-sm mb-1">By : {author}</p>
        <h3 className="font-semibold text-md">{title}</h3>
        {subtitle && (
          <p className="text-gray-400 text-sm mb-1 italic">{subtitle}</p>
        )}
        <div className="space-x-2 mt-2">
          {originalPrice && (
            <span className="line-through text-gray-400 text-sm">
              ${originalPrice}
            </span>
          )}
          <span className="text-red-600 font-bold">${price}</span>
        </div>
      </div>
    </div>
  );
};

export default memo(BookCard);

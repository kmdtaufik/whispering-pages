import React, { memo, useMemo, useState } from "react";
import Iconify from "../Iconify/Iconify";

const BigBookCard = ({
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
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const ratingStars = useMemo(
    () =>
      [1, 2, 3, 4, 5].map((i) => (
        <Iconify
          key={i}
          icon="material-symbols:star"
          className={rating >= i ? "text-amber-300" : "text-gray-300 text-lg"}
        />
      )),
    [rating]
  );

  return (
    <div
      className={`border border-gray-300 relative bg-white rounded-xl shadow-lg overflow-hidden w-full h-full ${className}`}
    >
      {/* Discount / Hot Badge */}
      {(discount != null || isHot) && (
        <div className="absolute top-3 left-3 space-y-1 z-10">
          {discount != null && (
            <span className="bg-orange-600 text-white text-sm font-bold px-3 py-1 rounded">
              -{discount}%
            </span>
          )}
          {isHot && (
            <span className="bg-red-600 text-white text-sm font-bold px-3 py-1 rounded">
              Hot
            </span>
          )}
        </div>
      )}

      {/* Wishlist Button */}
      <button className="absolute top-3 right-3 bg-white p-1.5 rounded-full shadow hover:bg-gray-200 z-10">
        <Iconify
          icon="fa:heart"
          className="text-gray-400 hover:text-red-500 text-xl"
        />
      </button>

      {/* Image */}
      <div className="relative w-full h-96">
        <img
          src={isHovered && hoverImage ? hoverImage : image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
        {isOutOfStock && (
          <div className="absolute inset-0 flex items-center justify-center text-red-800 font-semibold text-xl bg-white bg-opacity-75">
            Out Of Stock
          </div>
        )}

        {/* Hover Buttons */}
        {isHovered && !isOutOfStock && (
          <div className="absolute bottom-0 left-0 right-0 bg-transparent flex justify-around items-center py-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700">
              <Iconify icon="solar:cart-line-duotone" />
            </button>
            <button className="bg-gray-700 text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800">
              <Iconify icon="mdi-light:eye" />
            </button>
          </div>
        )}
      </div>

      {/* Details */}
      <div className="p-6 text-center">
        <div className="flex justify-center items-center space-x-1 mb-3">
          {ratingStars}
          <span className="text-gray-500 ml-2 text-base">({reviews})</span>
        </div>

        <p className="text-gray-500 text-lg mb-1">By: {author}</p>
        <h3 className="font-bold text-2xl mb-1">{title}</h3>
        {subtitle && (
          <p className="text-gray-400 text-base italic mb-2">{subtitle}</p>
        )}

        <div className="mt-3 space-x-2 text-xl">
          {originalPrice && (
            <span className="line-through text-gray-400">${originalPrice}</span>
          )}
          <span className="text-red-600 font-extrabold">${price}</span>
        </div>
      </div>
    </div>
  );
};

export default memo(BigBookCard);

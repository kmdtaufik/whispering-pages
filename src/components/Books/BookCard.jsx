import React from "react";
import Iconify from "../Iconify/Iconify"; // Ensure you have installed @iconify/react

const BookCard = ({
  title,
  subtitle,
  author,
  price,
  originalPrice,
  image,
  discount,
  rating,
  reviews,
  isHot,
  isOutOfStock,
}) => {
  return (
    <div className="relative bg-white rounded-lg shadow-md overflow-hidden w-full max-w-xs">
      {/* Discount/Hot Badge */}
      {isHot && (
        <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded z-10">
          {discount ? `-${discount}%` : "Hot"}
        </span>
      )}

      {/* Wishlist Icon */}
      <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow hover:bg-gray-100 z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.121 19.121a1.5 1.5 0 002.122 0L12 14.364l4.757 4.757a1.5 1.5 0 002.122-2.122l-4.757-4.757 4.757-4.757a1.5 1.5 0 10-2.122-2.122L12 9.879 7.243 5.121a1.5 1.5 0 00-2.122 2.122l4.757 4.757-4.757 4.757a1.5 1.5 0 000 2.122z"
          />
        </svg>
      </button>

      {/* Book Image */}
      <div className="relative">
        <img src={image} alt={title} className="w-full h-72 object-cover" />
        {isOutOfStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white font-semibold text-sm">
            Out Of Stock
          </div>
        )}
      </div>

      {/* Details */}
      <div className="p-4 text-center">
        {/* Icon-based Rating */}
        <div className="flex justify-center items-center space-x-0.5 mb-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <Iconify
              key={i}
              icon="material-symbols:star"
              className={rating >= i ? "text-amber-300" : "text-gray-300"}
            />
          ))}
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

export default BookCard;

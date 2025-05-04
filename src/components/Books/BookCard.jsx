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
      <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow hover:bg-gray-200 z-10">
        <Iconify
          icon="fa:heart"
          className="text-gray-400 hover:text-secondary "
        ></Iconify>
      </button>

      {/* Book Image */}
      <div className="relative">
        <img src={image} alt={title} className="w-full h-72 object-cover" />
        {isOutOfStock && (
          <div className="absolute inset-0  flex items-center justify-center text-red-800 font-semibold text-lg">
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

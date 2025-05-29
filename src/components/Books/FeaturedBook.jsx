import React, { useMemo } from "react";
import Iconify from "../Iconify/Iconify";

export default function FeaturedBook({
  title,
  author,
  price,
  originalPrice,
  image,
  rating,
  reviews,
  discount,
  features,
  action = "ADD TO CART", // Default action if not provided
}) {
  // Memoize the rating stars to avoid recalculating on every render
  const ratingStars = useMemo(
    () =>
      [1, 2, 3, 4, 5].map((i) => (
        <Iconify
          key={i}
          icon="material-symbols:star"
          className={rating >= i ? "text-amber-400" : "text-gray-300"}
        />
      )),
    [rating]
  );

  return (
    <div className="flex flex-col md:flex-row items-start gap-6 bg-white rounded-lg shadow-sm p-6">
      {/* Book Image */}
      <div className="flex-shrink-0">
        <img
          src={image}
          alt={`Cover of ${title}`}
          className="w-48 h-auto object-cover rounded-lg shadow-md"
          loading="lazy"
        />
      </div>

      {/* Book Details */}
      <div className="flex flex-col justify-start flex-grow space-y-4">
        {/* Rating */}
        <div className="flex items-center gap-1">
          {ratingStars}
          {reviews > 0 && (
            <span className="text-sm text-gray-500 ml-2">
              ({reviews} review{reviews !== 1 ? "s" : ""})
            </span>
          )}
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-secondary font-primary">
          {title}
        </h2>

        {/* Author */}
        <p className="text-gray-700">
          <span className="font-semibold">By:</span> {author}
        </p>

        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-primary font-primary">
            ${price}
          </span>
          {originalPrice && (
            <>
              <span className="text-lg text-gray-500 line-through font-primary">
                ${originalPrice}
              </span>
              <span className="bg-red-100 text-red-800 text-sm font-medium px-2 font-primary py-1 rounded">
                {discount}
              </span>
            </>
          )}
        </div>

        <hr className="border-gray-200" />

        {/* Features */}
        {features && features.length > 0 && (
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Book Details:</h3>
            <ul className="space-y-1">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="text-sm text-gray-600 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0 font-secondary"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Button */}
        <button className="bg-white text-secondary font-secondary font-bold text-sm border border-secondary hover:bg-secondary hover:text-white px-6 py-3   transition-colors duration-200 self-start">
          {action}
        </button>
      </div>
    </div>
  );
}

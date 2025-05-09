import React from "react";
import Iconify from "../Iconify/Iconify";

const BooksOfTheMonth = () => {
  const books = [
    {
      id: 1,
      title: "Healed New Life",
      author: "Alyce Kris",
      image: "https://m.media-amazon.com/images/I/91Sy3S-198L._AC_UL320_.jpg",
      originalPrice: 100,
      price: 90,
      discount: 10,
      rating: 4,
      reviews: 1,
      tags: ["For kids", "First published in 2014", "Copyright by Wpbingo"],
      outOfStock: false,
      buttonText: "Add to Cart",
    },
    {
      id: 2,
      title: "Cup Cake Diaries",
      author: "Alec Hansen",
      image: "https://m.media-amazon.com/images/I/81lfyQPPH3L._AC_UL320_.jpg",
      price: 115,
      rating: 0,
      reviews: 0,
      tags: ["For kids", "First published in 2014", "Copyright by Wpbingo"],
      outOfStock: true,
      buttonText: "Read More",
    },
  ];

  return (
    <section className="container mx-auto py-10">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl font-bold text-green-900">
          Books of the Month
        </h2>
        <a
          href="#"
          className="text-sm text-green-800 hover:underline flex items-center gap-1"
        >
          View all <span>→</span>
        </a>
      </div>

      <div className="flex flex-col md:flex-row items-stretch justify-center gap-15">
        {books.map((book) => (
          <div
            key={book.id}
            className="flex bg-white border rounded-xl overflow-hidden shadow hover:shadow-lg transition w-fit max-w-full"
          >
            {/* Image on the left */}
            <div className="relative flex-shrink-0 w-[130px] md:w-[150px]">
              <img
                src={book.image}
                alt={book.title}
                className="h-full w-full object-cover"
              />
              {book.discount && (
                <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded">
                  -{book.discount}%
                </span>
              )}
              {book.outOfStock && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/80 text-gray-700 font-bold text-lg">
                  Out of Stock
                </div>
              )}
            </div>

            {/* Text content on the right */}
            <div className="p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 mb-2 text-yellow-500 text-sm">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Iconify
                      key={i}
                      icon="material-symbols:star"
                      className={
                        book.rating >= i ? "text-amber-300" : "text-gray-300"
                      }
                    />
                  ))}
                  <span className="text-gray-600 text-xs">
                    ({book.reviews})
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-800">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">By: {book.author}</p>

                <div className="flex items-baseline gap-2 mb-3">
                  {book.originalPrice && (
                    <span className="line-through text-sm text-gray-400">
                      ${book.originalPrice}
                    </span>
                  )}
                  <span className="text-lg text-red-600 font-semibold">
                    ${book.price}
                  </span>
                </div>

                <ul className="text-xs text-gray-500 space-y-0.5 mb-4">
                  {book.tags.map((tag, index) => (
                    <li key={index} className="list-disc list-inside">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="mt-auto w-full py-2 border border-green-900 text-green-900 font-medium text-sm rounded hover:bg-green-900 hover:text-white transition">
                {book.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BooksOfTheMonth;

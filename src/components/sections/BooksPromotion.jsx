import React from "react";
import BookCard from "../Books/BookCard";
import BigBookCard from "../Books/BigBookCard";

export default function BooksPromotion() {
  const books = [
    {
      id: 1,
      title: "Healed New Life",
      subtitle: "How cancer gave me a life",
      author: "Alyce Kris",
      price: 90,
      originalPrice: 100,
      image: "BookCovers/pexels-photo-256450.jpeg",
      discount: 10,
      rating: 5,
      reviews: 1,
      isHot: true,
      isOutOfStock: false,
    },
    {
      id: 2,
      title: "The Art of Fashion",
      author: "Alec Hansen",
      price: 200,
      image: "BookCovers/pexels-photo-904620.jpeg",
      discount: null,
      rating: 5,
      reviews: 1,
      isHot: true,
      isOutOfStock: false,
    },
    {
      id: 3,
      title: "Africa Rising",
      author: "Norene Mayert",
      price: 125,
      originalPrice: 130,
      image: "BookCovers/pexels-photo-2228582.jpeg",
      discount: 4,
      rating: 5,
      reviews: 2,
      isHot: true,
      isOutOfStock: false,
    },
    {
      id: 4,
      title: "Life is What You Make It",
      author: "Glenna Berge",
      price: 100,
      originalPrice: 120,
      image: "BookCovers/pexels-photo-2386687.jpeg",
      discount: 17,
      rating: 5,
      reviews: 2,
      isHot: true,
      isOutOfStock: true,
    },
    {
      id: 5,
      title: "100 Selected Poems",
      author: "Alyce Kris",
      price: 350,
      originalPrice: 400,
      image: "BookCovers/pexels-photo-6475044.jpeg",
      discount: 13,
      rating: 4,
      reviews: 2,
      isHot: true,
      isOutOfStock: false,
    },
    {
      id: 6,
      title: "The Journey Within",
      author: "John Doe",
      price: 150,
      originalPrice: 180,
      image:
        "BookCovers/free-photo-of-vintage-pocket-watch-and-book-still-life.jpeg",
      discount: 17,
      rating: 4,
      reviews: 3,
      isHot: false,
      isOutOfStock: false,
    },
    {
      id: 7,
      title: "Mindful Living",
      author: "Jane Smith",
      price: 200,
      originalPrice: 250,
      image: "BookCovers/pexels-photo-374016.jpeg",
      discount: 20,
      rating: 5,
      reviews: 5,
      isHot: true,
      isOutOfStock: false,
    },
    {
      id: 8,
      title: "The Future of AI",
      author: "Elon Stark",
      price: 300,
      originalPrice: 350,
      image: "BookCovers/pexels-photo-3184325.jpeg",
      discount: 14,
      rating: 4,
      reviews: 4,
      isHot: false,
      isOutOfStock: false,
    },
    {
      id: 9,
      title: "Cooking Made Easy",
      author: "Chef Ramsey",
      price: 120,
      originalPrice: 150,
      image: "BookCovers/pexels-photo-17849668.webp",
      discount: 20,
      rating: 5,
      reviews: 10,
      isHot: true,
      isOutOfStock: false,
    },
    {
      id: 10,
      title: "Travel Diaries",
      author: "Wander Lust",
      price: 180,
      originalPrice: 200,
      image: "BookCovers/pexels-photo-14097126.jpeg",
      discount: 10,
      rating: 4,
      reviews: 6,
      isHot: false,
      isOutOfStock: true,
    },
  ];

  return (
    <section className="container mx-auto py-10 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2">
          <h2 className="text-xl md:text-2xl font-bold text-secondary font-primary">
            Travel the World from Home
          </h2>
          <a
            href="#"
            className="text-green-700 hover:underline text-sm font-medium"
          >
            View all →
          </a>
        </div>

        {/* Grid: Responsive layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 grid-rows-2 gap-2">
          {/* Left featured book spans appropriately on different screens */}
          <BigBookCard {...books[1]} className="col-span-2 row-span-2" />
          {/* Other books */}
          <BookCard {...books[2]} className="hidden md:block" />
          <BookCard {...books[3]} className="hidden md:block" />
          <BookCard {...books[4]} className="hidden lg:block" />
          <BookCard {...books[5]} className="hidden lg:block" />
          <BookCard {...books[6]} className="hidden lg:block" />
          <BookCard {...books[7]} className="hidden lg:block" />
          <BookCard {...books[8]} className="hidden lg:block" />
          <BookCard {...books[9]} className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}

import React, { useEffect, useState } from "react";
import BookCard from "../Books/BookCard";
import BigBookCard from "../Books/BigBookCard";

export default function BooksPromotion() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          "https://whispering-pages-backend.vercel.app/api/products"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch trending books");
        }
        const data = await response.json();
        setBooks(data.products);
        if (process.env.NODE_ENV !== "production") {
          console.log("Trending books fetched successfully:", data.products);
        }
      } catch (error) {
        console.error("Error fetching trending books:", error);
      }
    };
    fetchBooks();
  }, []);

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
          {books[0] && (
            <BigBookCard {...books[0]} className="col-span-2 row-span-2" />
          )}
          {/* Other books */}
          {books[1] && <BookCard {...books[1]} className="hidden md:block" />}
          {books[2] && <BookCard {...books[2]} className="hidden md:block" />}
          {books[3] && <BookCard {...books[3]} className="hidden md:block" />}
          {books[4] && <BookCard {...books[4]} className="hidden lg:block" />}
          {books[5] && <BookCard {...books[5]} className="hidden lg:block" />}
          {books[6] && <BookCard {...books[6]} className="hidden lg:block" />}
          {books[7] && <BookCard {...books[7]} className="hidden lg:block" />}
          {books[8] && <BookCard {...books[8]} className="hidden lg:block" />}
        </div>
      </div>
    </section>
  );
}

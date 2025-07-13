import React, { useState, useEffect } from "react";
import BookCard from "./BookCard";
import CustomCarousel from "../common/CustomCarousel";

export default function TopBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          "https://whispering-pages-backend.vercel.app/api/products"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch top books");
        }
        const data = await response.json();
        setBooks(data.products);
        if (process.env.NODE_ENV !== "production") {
          console.log("Top books fetched successfully:", data.products);
        }
      } catch (error) {
        console.error("Error fetching top books:", error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <section className="container mx-auto">
      <div>
        <span className="text-secondary py-5 my-1.5 mx-5 font-primary text-2xl font-bold ">
          Top Books!
        </span>
      </div>

      <div className="px-5">
        <CustomCarousel
          slidesToShow={6}
          slidesToScroll={1}
          spaceBetween={20}
          breakpoints={{
            0: { slidesToShow: 2 },
            1024: { slidesToShow: 6 },
          }}
          className="my-5"
        >
          {books.map((book) => (
            <BookCard key={book.__id} {...book} />
          ))}
        </CustomCarousel>
      </div>
    </section>
  );
}

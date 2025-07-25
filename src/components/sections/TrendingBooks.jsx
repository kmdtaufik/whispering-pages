import React, { useEffect, useState } from "react";
import BookCard from "../Books/BookCard";
import CustomCarousel from "../common/CustomCarousel";
import Typography from "../Typography/Typography";

// const books = [
//   {
//     title: "Healed New Life",
//     subtitle: "How cancer gave me a life",
//     author: "Alyce Kris",
//     price: 90,
//     originalPrice: 100,
//     image: "BookCovers/pexels-photo-256450.jpeg",
//     discount: 10,
//     rating: 5,
//     reviews: 1,
//     isHot: true,
//     isOutOfStock: false,
//   },
//   {
//     title: "The Art of Fashion",
//     author: "Alec Hansen",
//     price: "200.00",
//     image: "BookCovers/pexels-photo-904620.jpeg",
//     discount: null,
//     rating: 5,
//     reviews: 1,
//     isHot: true,
//     isOutOfStock: false,
//   },
//   {
//     title: "Africa Rising",
//     author: "Norene Mayert",
//     price: 125,
//     originalPrice: 130,
//     image: "BookCovers/pexels-photo-2228582.jpeg",
//     discount: 4,
//     rating: 5,
//     reviews: 2,
//     isHot: true,
//     isOutOfStock: false,
//   },
//   {
//     title: "Life is What You Make It",
//     author: "Glenna Berge",
//     price: 100,
//     originalPrice: 120,
//     image: "BookCovers/pexels-photo-2386687.jpeg",
//     discount: 17,
//     rating: 5,
//     reviews: 2,
//     isHot: true,
//     isOutOfStock: true,
//   },
//   {
//     title: "100 Selected Poems",
//     author: "Alyce Kris",
//     price: 350,
//     originalPrice: 400,
//     image: "BookCovers/pexels-photo-6475044.jpeg",
//     discount: 13,
//     rating: 4,
//     reviews: 2,
//     isHot: true,
//     isOutOfStock: false,
//   },
//   {
//     title: "The Journey Within",
//     author: "John Doe",
//     price: 150,
//     originalPrice: 180,
//     image:
//       "BookCovers/free-photo-of-vintage-pocket-watch-and-book-still-life.jpeg",
//     discount: 17,
//     rating: 4,
//     reviews: 3,
//     isHot: false,
//     isOutOfStock: false,
//   },
//   {
//     title: "Mindful Living",
//     author: "Jane Smith",
//     price: 200,
//     originalPrice: 250,
//     image: "BookCovers/pexels-photo-374016.jpeg",
//     discount: 20,
//     rating: 5,
//     reviews: 5,
//     isHot: true,
//     isOutOfStock: false,
//   },
//   {
//     title: "The Future of AI",
//     author: "Elon Stark",
//     price: 300,
//     originalPrice: 350,
//     image: "BookCovers/pexels-photo-3184325.jpeg",
//     discount: 14,
//     rating: 4,
//     reviews: 4,
//     isHot: false,
//     isOutOfStock: false,
//   },
//   {
//     title: "Cooking Made Easy",
//     author: "Chef Ramsey",
//     price: 120,
//     originalPrice: 150,
//     image: "BookCovers/pexels-photo-17849668.webp",
//     discount: 20,
//     rating: 5,
//     reviews: 10,
//     isHot: true,
//     isOutOfStock: false,
//   },
//   {
//     title: "Travel Diaries",
//     author: "Wander Lust",
//     price: 180,
//     originalPrice: 200,
//     image: "BookCovers/pexels-photo-14097126.jpeg",
//     discount: 10,
//     rating: 4,
//     reviews: 6,
//     isHot: false,
//     isOutOfStock: true,
//   },
// ];

export default function TrendingBooks() {
  // fetch book form api
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
        // eslint-disable-next-line no-undef
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
      <div>
        <h1 className="text-secondary text-2xl py-5 font-primary font-bold">
          Trending Books!
        </h1>
      </div>
      <CustomCarousel
        slidesToShow={6}
        slidesToScroll={1}
        spaceBetween={20}
        navigation={true}
        pagination={false}
        loop={true}
        breakpoints={{
          320: { slidesToShow: 1 },
          480: { slidesToShow: 2 },
          768: { slidesToShow: 3 },
          1024: { slidesToShow: 4 },
          1280: { slidesToShow: 5 },
          1536: { slidesToShow: 6 },
        }}
        className="mySwiper trending-books-carousel"
        navigationClass="carousel-nav-external"
      >
        {books.map((book) => (
          <BookCard key={book._id} {...book} />
        ))}
      </CustomCarousel>
    </section>
  );
}

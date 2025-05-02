import React from "react";
import BookCard from "./BookCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Typography from "../Typography/Typography";

const books = [
  {
    title: "Healed New Life",
    subtitle: "How cancer gave me a new life",
    author: "Alyce Kris",
    price: 90,
    originalPrice: 100,
    image: "https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg",
    discount: 10,
    rating: 5,
    reviews: 1,
    isHot: true,
    isOutOfStock: false,
  },
  {
    title: "The Art of Fashion",
    author: "Alec Hansen",
    price: "200.00",
    image: "https://images.pexels.com/photos/904620/pexels-photo-904620.jpeg",
    discount: null,
    rating: 5,
    reviews: 1,
    isHot: true,
    isOutOfStock: false,
  },
  {
    title: "Africa Rising",
    author: "Norene Mayert",
    price: 125,
    originalPrice: 130,
    image: "https://images.pexels.com/photos/2228582/pexels-photo-2228582.jpeg",
    discount: 4,
    rating: 5,
    reviews: 2,
    isHot: true,
    isOutOfStock: false,
  },
  {
    title: "Life is What You Make It",
    author: "Glenna Berge",
    price: 100,
    originalPrice: 120,
    image: "https://images.pexels.com/photos/2386687/pexels-photo-2386687.jpeg",
    discount: 17,
    rating: 5,
    reviews: 2,
    isHot: true,
    isOutOfStock: true,
  },
  {
    title: "100 Selected Poems",
    author: "Alyce Kris",
    price: 350,
    originalPrice: 400,
    image: "https://images.pexels.com/photos/6475044/pexels-photo-6475044.jpeg",
    discount: 13,
    rating: 4,
    reviews: 2,
    isHot: true,
    isOutOfStock: false,
  },
  {
    title: "The Journey Within",
    author: "John Doe",
    price: 150,
    originalPrice: 180,
    image:
      "https://images.pexels.com/photos/31867928/pexels-photo-31867928/free-photo-of-vintage-pocket-watch-and-book-still-life.jpeg",
    discount: 17,
    rating: 4,
    reviews: 3,
    isHot: false,
    isOutOfStock: false,
  },
  {
    title: "Mindful Living",
    author: "Jane Smith",
    price: 200,
    originalPrice: 250,
    image: "https://images.pexels.com/photos/374016/pexels-photo-374016.jpeg",
    discount: 20,
    rating: 5,
    reviews: 5,
    isHot: true,
    isOutOfStock: false,
  },
  {
    title: "The Future of AI",
    author: "Elon Stark",
    price: 300,
    originalPrice: 350,
    image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg",
    discount: 14,
    rating: 4,
    reviews: 4,
    isHot: false,
    isOutOfStock: false,
  },
  {
    title: "Cooking Made Easy",
    author: "Chef Ramsey",
    price: 120,
    originalPrice: 150,
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    discount: 20,
    rating: 5,
    reviews: 10,
    isHot: true,
    isOutOfStock: false,
  },
  {
    title: "Travel Diaries",
    author: "Wander Lust",
    price: 180,
    originalPrice: 200,
    image: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg",
    discount: 10,
    rating: 4,
    reviews: 6,
    isHot: false,
    isOutOfStock: true,
  },
];

export default function TopBooks() {
  return (
    <section className="container mx-auto border-t border-t-gray-200">
      <div>
        <Typography variant="h1" className="text-secondary py-5">
          {" "}
          Top Books!
        </Typography>
      </div>
      <Swiper
        navigation={true}
        spaceBetween={5}
        modules={[Navigation]}
        className="mySwiper "
        slidesPerView={2}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
      >
        {books.map((book, index) => (
          <SwiperSlide key={index}>
            <BookCard {...book} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

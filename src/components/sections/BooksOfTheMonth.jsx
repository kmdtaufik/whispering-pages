import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router";
import FeaturedBook from "../Books/FeaturedBook";
import { Swiper, SwiperSlide } from "swiper/react";

export default function BookOfTheMonth() {
  const books = [
    {
      id: 1,
      title: "Healed New Life",
      author: "Alyce Kris",
      price: 90,
      originalPrice: 100,
      image:
        "https://bookio.wpbingosite.com/wp-content/uploads/2018/05/cup-cake-diares-23-480x693.jpg",
      rating: 5,
      reviews: 12,
      discount: "-10%",
      features: ["For kids", "First published in 2014", "Copyright by Wpbingo"],
      stock: "in",
      action: "ADD TO CART",
    },
    {
      id: 2,
      title: "Cup Cake Diaries",
      author: "Alec Hansen",
      price: 115,
      originalPrice: 125,
      image:
        "https://bookio.wpbingosite.com/wp-content/uploads/2018/05/cup-cake-diares-480x693.jpg",
      rating: 4,
      reviews: 8,
      discount: "-8%",
      features: ["For teens", "Best seller 2023", "Award winning"],
      stock: "in",
      action: "ADD TO CART",
    },
    {
      id: 3,
      title: "Digital Marketing Mastery",
      author: "Sarah Johnson",
      price: 145,
      originalPrice: 160,
      image:
        "https://bookio.wpbingosite.com/wp-content/uploads/2018/05/cup-cake-diares-480x693.jpg",
      rating: 5,
      reviews: 25,
      discount: "-9%",
      features: ["Business", "Updated 2024", "Practical guide"],
      stock: "in",
      action: "ADD TO CART",
    },
    {
      id: 4,
      title: "The Art of Programming",
      author: "Michael Chen",
      price: 120,
      originalPrice: 140,
      image:
        "https://bookio.wpbingosite.com/wp-content/uploads/2018/05/cup-cake-diares-6-480x693.jpg",
      rating: 4,
      reviews: 18,
      discount: "-14%",
      features: ["Technology", "For beginners", "Code examples included"],
      stock: "in",
      action: "ADD TO CART",
    },
    {
      id: 5,
      title: "Mindful Living Guide",
      author: "Emma Rodriguez",
      price: 85,
      originalPrice: 95,
      image:
        "https://bookio.wpbingosite.com/wp-content/uploads/2018/05/cup-cake-diares-22-480x693.jpg",
      rating: 5,
      reviews: 33,
      discount: "-11%",
      features: ["Self-help", "Meditation guide", "Life changing"],
      stock: "in",
      action: "ADD TO CART",
    },
    {
      id: 6,
      title: "Adventures in Space",
      author: "Dr. Robert Kim",
      price: 95,
      originalPrice: 110,
      image:
        "https://bookio.wpbingosite.com/wp-content/uploads/2018/05/cup-cake-diares-3-480x693.jpg",
      rating: 4,
      reviews: 14,
      discount: "-14%",
      features: ["Science fiction", "Educational", "Illustrated"],
      stock: "in",
      action: "ADD TO CART",
    },
    {
      id: 7,
      title: "Cooking Masterclass",
      author: "Chef Maria Lopez",
      price: 75,
      originalPrice: 85,
      image:
        "https://bookio.wpbingosite.com/wp-content/uploads/2018/05/cup-cake-diares-15-480x693.jpg",
      rating: 5,
      reviews: 28,
      discount: "-12%",
      features: ["Cooking", "Step by step", "Professional tips"],
      stock: "in",
      action: "ADD TO CART",
    },
    {
      id: 8,
      title: "Photography Basics",
      author: "James Wilson",
      price: 105,
      originalPrice: 120,
      image:
        "https://bookio.wpbingosite.com/wp-content/uploads/2018/05/cup-cake-diares-12-480x693.jpg",
      rating: 4,
      reviews: 16,
      discount: "-13%",
      features: ["Photography", "Beginner friendly", "Technique focused"],
      stock: "in",
      action: "ADD TO CART",
    },
  ];

  return (
    <section className="container mx-auto py-9 px-4">
      {/* Section Header */}
      <div className="flex justify-between items-center py-5">
        <h1 className="font-primary text-secondary font-bold text-2xl">
          Books of The Month
        </h1>
        <Link
          to="/books"
          className="text-secondary text-md font-bold font-primary flex items-center gap-1 hover:underline transition-all duration-200 hover:gap-2"
        >
          View All
          <Icon
            icon="lets-icons:arrow-right-light"
            className="text-secondary text-lg"
          />
        </Link>
      </div>

      {/* Featured Book Display */}
      {/* Swiper */}
      <Swiper
        loop={true}
        spaceBetween={10}
        slidesPerView={1}
        className="mySwiper"
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
      >
        {books &&
          books.map((books, index) => (
            <SwiperSlide key={index}>
              <FeaturedBook {...books} />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
}

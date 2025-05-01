import React from "react";
import Typography from "../Typography/Typography";
import ClientReview from "./ClientReview";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Review() {
  const reviews = [
    {
      name: "Amin Smith",
      rating: 5,
      title: "Great Quality",
      review:
        "This is the best service I have ever used. Highly recommend to everyone!",
      imgUrl:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
      profession: "Photographer",
    },
    {
      name: "John Doe",
      rating: 4,
      title: "Good Service",
      review:
        "The service was good, but there is room for improvement in some areas.",
      imgUrl:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
      profession: "Designer",
    },
    {
      name: "Jane Doe",
      rating: 5,
      title: "Excellent Experience",
      review:
        "I had an excellent experience with this service. Will use again!",
      imgUrl:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
      profession: "Developer",
    },
    {
      name: "Alice Johnson",
      rating: 4,
      title: "Very Satisfied",
      review:
        "I am very satisfied with the service. It met all my expectations.",
      imgUrl:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
      profession: "Manager",
    },
    {
      name: "Bob Brown",
      rating: 3,
      title: "Highly Recommend",
      review:
        "I highly recommend this service to anyone looking for quality work.",
      imgUrl:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
      profession: "Engineer",
    },
    {
      name: "Charlie Black",
      rating: 4,
      title: "Good Value",
      review:
        "The service is a good value for the price. I would use it again.",
      imgUrl:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
      profession: "Consultant",
    },
    {
      name: "Diana White",
      rating: 5,
      title: "Amazing Service",
      review: "This service is amazing! I am very happy with the results.",
      imgUrl:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
      profession: "Artist",
    },
  ];
  return (
    <section className="container mx-auto py-10 border-t border-t-gray-100">
      <Typography
        variant="h3"
        className=" font-primary font-bold text-secondary pb-10"
      >
        {" "}
        Happy Client Say!
      </Typography>{" "}
      <Swiper
        navigation={true}
        spaceBetween={30}
        modules={[Navigation]}
        className="mySwiper "
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {reviews &&
          reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <ClientReview reviews={review}></ClientReview>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
}

import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Facility from "../../components/Facility/Facility";
import Review from "../../components/Review/Review";
import BooksPromoBanner from "../../components/Promotion/BooksPromoBanner";
import TopBooks from "../../components/Books/TopBooks";
import BookShowcase from "../../components/sections/BookShowcase";
import BookPromotion from "../../components/sections/BooksPromotion";
import HeroBanner from "../../components/sections/HeroBanner";

const Home = () => {
  return (
    <>
      <Header></Header>
      <HeroBanner></HeroBanner>
      <BookPromotion></BookPromotion>
      <BookShowcase></BookShowcase>
      <TopBooks></TopBooks>
      <BooksPromoBanner></BooksPromoBanner>
      <Review></Review>
      <Facility></Facility>
      <Footer></Footer>
    </>
  );
};

export default Home;

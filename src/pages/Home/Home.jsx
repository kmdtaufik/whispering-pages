import React, { Suspense } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Facility from "../../components/Facility/Facility";
import Review from "../../components/Review/Review";
import BooksPromoBanner from "../../components/Promotion/BooksPromoBanner";
import TopBooks from "../../components/Books/TopBooks";
import BookShowcase from "../../components/sections/BookShowcase";
import BookPromotion from "../../components/sections/BooksPromotion";
import HeroBanner from "../../components/sections/HeroBanner";
import BooksOfTheMonth from "../../components/sections/BooksOfTheMonth";
import TopCategories from "../../components/sections/TopCategories";
import TrendingBooks from "../../components/sections/TrendingBooks";
import PromoSection from "../../components/sections/PromoSection";
import SlideShow from "../../components/sections/SlideShow";

const Home = () => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center min-h-screen">
          Loading...
        </div>
      }
    >
      <Header></Header>
      <SlideShow></SlideShow>
      <PromoSection></PromoSection>
      <TrendingBooks></TrendingBooks>
      <TopCategories>/* Top Categories Section */</TopCategories>
      <BooksOfTheMonth></BooksOfTheMonth>
      <HeroBanner></HeroBanner>
      <BookPromotion></BookPromotion>
      <BookShowcase></BookShowcase>
      <TopBooks></TopBooks>
      <BooksPromoBanner></BooksPromoBanner>
      <Review></Review>
      <Facility></Facility>
      <Footer></Footer>
    </Suspense>
  );
};

export default Home;

import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Facility from "../../components/Facility/Facility";
import Review from "../../components/Review/Review";
import BooksPromoBanner from "../../components/Promotion/BooksPromoBanner";
import TopBooks from "../../components/Books/TopBooks";
const Home = () => {
  return (
    <>
      <Header></Header>
      <TopBooks></TopBooks>
      <BooksPromoBanner></BooksPromoBanner>
      <Review></Review>
      <Facility></Facility>
      <Footer></Footer>
    </>
  );
};

export default Home;

import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Facility from "../../components/Facility/Facility";
import Review from "../../Review/Review";

const Home = () => {
  return (
    <>
      <Header></Header>
      <Review></Review>
      <Facility></Facility>
      <Footer></Footer>
    </>
  );
};

export default Home;

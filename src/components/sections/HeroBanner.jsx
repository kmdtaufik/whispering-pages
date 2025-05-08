import React from "react";

const HeroBanner = () => {
  return (
    <section
      className="relative w-full h-[500px] flex items-center justify-center text-center bg-cover bg-center container mx-auto"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg')",
      }}
    >
      {/* Overlay to darken or soften if needed */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm z-0"></div>

      {/* Book images */}
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/81vpsIs58WL.jpg"
        alt="Origin"
        className="absolute w-32 rotate-[-20deg] top-[10%] left-[10%] shadow-lg"
      />
      <img
        src="https://img.freepik.com/free-vector/minimalist-book-cover-template_23-2148899519.jpg"
        alt="Entangled Life"
        className="absolute w-28 rotate-[-10deg] top-[5%] left-[30%] shadow-lg"
      />
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L.jpg"
        alt="All The Light We Cannot See"
        className="absolute w-36 rotate-[-30deg] bottom-[10%] left-[15%] shadow-lg"
      />
      <img
        src="https://edit.org/images/cat/book-covers-big-2019101610.jpg"
        alt="A Meal in Winter"
        className="absolute w-28 rotate-[10deg] top-[5%] right-[25%] shadow-lg"
      />
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG7ekxu3OzvIQLn2K9bnYPHvNlHiVnR216eg&s"
        alt="Amari and the Night Brothers"
        className="absolute w-36 rotate-[20deg] bottom-[10%] right-[10%] shadow-lg"
      />

      {/* Centered Text */}
      <div className="relative z-10 text-white max-w-xl">
        <h1 className="text-4xl font-extrabold leading-tight mb-4 drop-shadow-lg">
          Book Your <br /> Own Adventures
        </h1>
        <p className="text-lg font-medium text-gray-100 mb-6">
          MORE BANG FOR YOUR BOOK
        </p>
        <button className="bg-green-900 hover:bg-green-800 text-white font-semibold py-2 px-5 rounded">
          Shop now
        </button>
      </div>
    </section>
  );
};

export default HeroBanner;

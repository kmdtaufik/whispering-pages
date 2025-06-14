import React from "react";

const HeroBanner = () => {
  return (
    <section className="container mx-auto py-10 px-4">
      <div
        className="relative h-64 md:h-96 lg:h-[522px] w-full flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://bookio.wpbingosite.com/wp-content/uploads/2021/07/img1-5-1.jpg')",
        }}
      >
        {/* Centered Text */}
        <div className="relative z-10 text-white max-w-xl px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 drop-shadow-lg font-primary text-secondary">
            Book Your <br /> Own Adventures
          </h1>
          <p className="text-base md:text-lg font-bold mb-6 font-secondary text-secondary">
            MORE BANG FOR YOUR BOOK
          </p>
          <button className="text-base md:text-lg bg-secondary hover:bg-black text-white font-secondary font-bold py-2 px-5 rounded">
            Shop now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;

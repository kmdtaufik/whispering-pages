import React from "react";

const cards = [
  {
    titleLines: ["New", "Books"],
    image:
      "https://bookio.wpbingosite.com/wp-content/uploads/2021/07/img1-1-1.jpg",
    buttonColor: "text-white bg-red-600 hover:bg-secondary",
  },
  {
    titleLines: ["Pre Order", "Now."],
    image:
      "https://bookio.wpbingosite.com/wp-content/uploads/2021/07/img1-2-1.jpg",
    buttonColor: "text-white bg-green-700 hover:bg-secondary",
  },
  {
    titleLines: ["Top", "Rated"],
    image:
      "https://bookio.wpbingosite.com/wp-content/uploads/2021/07/img1-3-1.jpg",
    buttonColor: "text-white bg-blue-800 hover:bg-secondary",
  },
];

const PromoSection = () => {
  return (
    <section className="px-4 py-10 max-w-7xl mx-auto grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-3">
      {/* Top Cards */}
      {cards.map((card, i) => (
        <div
          key={i}
          className="relative h-48 md:h-64 group bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${card.image})` }}
        >
          {/* Text Overlay */}
          <div className="px-4 md:px-6 text-white flex flex-col h-full justify-end">
            <div className="mb-4">
              <h3 className="text-2xl md:text-3xl font-primary font-bold leading-tight">
                {card.titleLines.map((line, idx) => (
                  <div key={idx}>{line}</div>
                ))}
              </h3>
              <button
                className={`${card.buttonColor} px-4 py-2 text-sm font-bold font-secondary transition w-fit mt-2`}
              >
                Shop now
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Wide Promo Banner */}
      <div className="bg-[url(https://bookio.wpbingosite.com/wp-content/uploads/2021/07/img1-4-1.jpg)] bg-cover bg-center md:col-span-3 flex flex-col md:flex-row justify-center items-center p-6 mt-4 md:mt-6 text-center min-h-[200px] md:min-h-[300px]">
        <div className="py-10 md:py-20">
          <p className="text-sm md:text-lg text-gray-500 tracking-wider font-bold font-secondary">
            MORE BANG FOR YOUR BOOK
          </p>
          <h2 className="text-3xl md:text-5xl font-bold font-primary text-white mt-1 mb-2">
            20% Off Select Books
          </h2>
          <button className="bg-black font-secondary text-white px-5 py-2 text-sm font-medium hover:bg-gray-800 mt-2">
            Shop now
          </button>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;

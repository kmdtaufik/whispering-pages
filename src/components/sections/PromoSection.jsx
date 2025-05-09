import React from "react";

const cards = [
  {
    titleLines: ["New", "Books"],
    image:
      "https://bookio.wpbingosite.com/wp-content/uploads/2021/07/img1-1-1.jpg",
    buttonColor: "bg-white text-red-600 hover:bg-gray-100",
  },
  {
    titleLines: ["Pre", "Order"],
    image:
      "https://bookio.wpbingosite.com/wp-content/uploads/2021/07/img1-2-1.jpg",
    buttonColor: "bg-white text-green-700 hover:bg-gray-100",
  },
  {
    titleLines: ["Top", "Rated"],
    image:
      "https://bookio.wpbingosite.com/wp-content/uploads/2021/07/img1-3-1.jpg",
    buttonColor: "bg-white text-blue-800 hover:bg-gray-100",
  },
];

const PromoSection = () => {
  return (
    <section className="px-4 py-12 max-w-7xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-3">
      {/* Top Cards */}
      {cards.map((card, i) => (
        <div key={i} className="relative h-64 overflow-hidden rounded-md group">
          <img
            src={card.image}
            alt={card.titleLines.join(" ")}
            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition duration-300 ease-in-out"
            loading="lazy"
          />
          {/* Text Overlay */}
          <div className="relative z-10 p-6 text-white flex flex-col h-full justify-between bg-black/40">
            <div>
              <h3 className="text-3xl font-extrabold leading-tight uppercase">
                {card.titleLines.map((line, idx) => (
                  <div key={idx}>{line}</div>
                ))}
              </h3>
            </div>
            <button
              className={`${card.buttonColor} px-4 py-2 text-sm font-medium rounded transition w-fit`}
            >
              Shop now
            </button>
          </div>
        </div>
      ))}

      {/* Wide Promo Banner */}
      <div className="bg-gradient-to-r from-slate-100 to-gray-300 md:col-span-3 flex flex-col md:flex-row justify-center items-center p-6 mt-6 rounded-md text-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-gray-500 tracking-wider">
            MORE BANG FOR YOUR BOOK
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mt-1 mb-2">
            20% Off Select Books
          </h2>
          <button className="bg-black text-white px-5 py-2 text-sm font-medium hover:bg-gray-800 mt-2">
            Shop now
          </button>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;

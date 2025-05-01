import React from "react";

const BooksPromoBanner = () => {
  return (
    <section className="relative py-16 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative">
        {/* Green Block with Text */}
        <div className="bg-green-950 text-white md:w-3/5 w-full rounded-r-2xl px-8 py-10 relative z-10">
          <h4 className="uppercase text-sm tracking-widest mb-2">
            Welcome to the wonderful world of books
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
            Cheap Books, <br /> Fantastic Choice
          </h2>
          <p className="text-gray-300 mb-6 text-sm leading-relaxed">
            If you're looking for great value second hand books, then World of
            Books is the place for you. As you may already know, we aren’t like
            other online book stores. For starters, we don’t believe that books
            should only be read once, or have a single owner. Literature should
            endure and be continually recycled, which is why we help millions of
            used books find new homes every year.
          </p>
          <button className="border border-white text-white px-6 py-2 hover:bg-white hover:text-green-950 transition rounded">
            Learn more
          </button>
        </div>

        {/* Floating Image */}
        <div className="hidden md:flex md:w-2/5 w-full relative z-20  justify-center md:justify-end">
          <img
            src="https://images.pexels.com/photos/31737662/pexels-photo-31737662/free-photo-of-woman-sitting-in-front-of-large-bookshelf.jpeg"
            alt="Bookshelf in library"
            className=" absolute rounded-lg shadow-xl w-[490px] h-[300px] md:object-cover md:top-9/12 md:left-[-80px] transform md:-translate-y-1/2"
          />
        </div>
      </div>
    </section>
  );
};

export default BooksPromoBanner;

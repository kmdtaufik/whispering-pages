import React from "react";

const BooksPromoBanner = () => {
  return (
    <section className="pt-6 overflow-hidden bg-white">
      <div className="pt-8 bg-[url('https://bookio.wpbingosite.com/wp-content/uploads/2021/07/img1-9.jpg')] bg-no-repeat bg-left-top  text-white px-6 py-8 ">
        <div className="pt-24 flex justify-between items-start gap-6">
          {" "}
          <div className="flex flex-col w-full md:w-3/5">
            <h4 className="uppercase text-sm tracking-widest mb-1 font-secondary text-nowrap font-bold ">
              Welcome to the wonderful world of books
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 leading-snug font-primary">
              Cheap Books, <br /> Fantastic Choice
            </h2>
            <hr className="w-[10%] border-white mb-3" />
            <p className="text-gray-300 text-sm leading-relaxed font-secondary mb-4">
              If you're looking for great value second hand books, then World of
              Books is the place for you. As you may already know, we aren’t
              like other online book stores. For starters, we don’t believe that
              books should only be read once, or have a single owner. Literature
              should endure and be continually recycled, which is why we help
              millions of used books find new homes every year.
            </p>
            <button className="border border-white text-white px-5 py-2 hover:bg-white hover:text-green-950 transition rounded self-start">
              Learn more
            </button>
          </div>
          <img
            src="https://images.pexels.com/photos/31737662/pexels-photo-31737662/free-photo-of-woman-sitting-in-front-of-large-bookshelf.jpeg"
            alt="Bookshelf in library"
            className="w-full md:w-2/5 h-[600px] object-cover "
          />
        </div>
      </div>
    </section>
  );
};

export default BooksPromoBanner;

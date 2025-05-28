import React from "react";

const BooksPromoBanner = () => {
  return (
    <section className="py-16 overflow-hidden bg-white">
      <div className="flex flex-col md:flex-row items-stretch justify-start gap-10">
        {/* Green Block with Text */}
        <div className="bg-[url('https://bookio.wpbingosite.com/wp-content/uploads/2021/07/img1-9.jpg')] bg-cover bg-left text-white md:w-3/5 w-full px-8 py-10">
          <h4 className="uppercase text-sm tracking-widest mb-2 font-secondary">
            Welcome to the wonderful world of books
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug font-primary">
            Cheap Books, <br /> Fantastic Choice
          </h2>
          <hr className="w-[10%] border-white mb-4" />
          <p className="text-gray-300 mb-6 text-sm leading-relaxed font-secondary">
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
        <div className="hidden md:flex md:w-2/5 relative items-center justify-end">
          <img
            src="https://images.pexels.com/photos/31737662/pexels-photo-31737662/free-photo-of-woman-sitting-in-front-of-large-bookshelf.jpeg"
            alt="Bookshelf in library"
            className="absolute w-[690px] h-[500px] object-cover top-2/3 left-[-80px] transform -translate-y-1/2 rounded"
          />
        </div>
      </div>
    </section>
  );
};

export default BooksPromoBanner;

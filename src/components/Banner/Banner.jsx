import React from "react";
import Books from "../../assets/books.jpg";
const Banner = () => {
  return (
    <div className="hero bg-base-200 py-7">
      <div className="hero-content flex-col justify-around lg:flex-row-reverse">
        <img src={Books} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="w-2/4">
          <h1 className="text-5xl font-bold mb-11">
            Books to freshen up your bookshelf
          </h1>

          <button className="btn  bg-[#23BE0A] text-white">
            View the List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

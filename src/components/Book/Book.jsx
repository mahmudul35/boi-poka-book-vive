import React from "react";
import { Link } from "react-router-dom";
const Book = ({ book }) => {
  const {
    bookId,
    author,
    bookName,
    category,
    image,
    publisher,
    rating,
    review,
    tags,
  } = book;
  return (
    <div className="card bg-base-100 w-96 shadow-xl p-7">
      <figure className="bg-[#F3F3F3] rounded-2xl">
        <img src={image} alt={bookName} className="h-44 py-7 " />
      </figure>
      <div className="card-body">
        <div className="flex justify-between ">
          {tags.map((tag) => (
            <button className="btn btn-xs text-[#23BE0A] font-bold">
              {tag}
            </button>
          ))}
        </div>
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>By: {author}</p>
        <div className="divider"></div>
        <div className="card-actions justify-between">
          <div className="badge badge-outline">{category}</div>
          <div className="badge badge-outline">{rating}</div>
        </div>
        <div className="text-center">
          <Link to={`books/${bookId}`}>
            {" "}
            <button className="btn bg-[#23BE0A] mt-3 ">Show Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Book;

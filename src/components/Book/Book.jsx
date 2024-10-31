import React from "react";

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
  } = book;
  return (
    <div className="card bg-base-100 w-96 shadow-xl p-7">
      <figure className="bg-[#F3F3F3] rounded-2xl">
        <img src={image} alt={bookName} className="h-44 py-7 " />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>By: {author}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default Book;

import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();
  const customArray = Object.entries(data).map(([key, value]) => ({
    key,
    value,
  }));
  const book = customArray.find((book) => book.value.bookId === id);
  const {
    image,
    bookName,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = book.value;
  return (
    <div className="flex justify-center mt-44 mb-16">
      <div className="bg-slate-300 p-6 rounded-lg flex justify-center items-center w-[30%]">
        <img src={image} alt="" className="h-[90%]" />
      </div>
      <div className="ml-8 w-[70%]">
        <h1 className="text-3xl font-bold ">{bookName}</h1>
        <p>Review :{review}</p>
        <div className="my-3 flex gap-11">
          {tags.map((tag) => (
            <button className="btn btn-xs text-[#23BE0A] font-bold">
              {tag}
            </button>
          ))}
        </div>
        <hr />
        <div className="space-y-5 mt-3">
          <p>Number of pages :{totalPages}</p>
          <p>Publisher :{publisher}</p>
          <p>Year of publishing: {yearOfPublishing}</p>
          <p>Rating: {rating}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

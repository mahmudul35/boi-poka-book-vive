import React from "react";

const Book = ({ book }) => {
  const { bookId, author, bookName } = book;
  return (
    <div>
      <h1>{bookName}</h1>
    </div>
  );
};

export default Book;

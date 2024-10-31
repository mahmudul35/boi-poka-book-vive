import React, { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch("booksData.json")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);
  return (
    <div className="my-6">
      <h1 className="text-3xl text-center">Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {allBooks.map((book) => (
          <Book key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;

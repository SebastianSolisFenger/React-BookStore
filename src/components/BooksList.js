import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BooksList = () => {
  const books = useSelector((state) => state.boosk);

  return (
    <div>
      <ul className="books-list">
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            name={book.name}
            author={book.author}
          />
        ))}
      </ul>
    </div>
  );
};

export default BooksList;

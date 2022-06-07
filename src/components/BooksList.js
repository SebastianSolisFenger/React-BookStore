import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BooksList = () => {
  const books = useSelector((state) => state.books);

  return (
    <div>
      <ul className="books-list">
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
          />
        ))}
      </ul>
    </div>
  );
};

export default BooksList;

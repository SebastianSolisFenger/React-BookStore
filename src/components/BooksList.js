import React from 'react';
import Book from './Book';

const BooksList = () => {
  const books = [
    {
      id: 1, name: 'The wolf', category: 'Sci-Fi', author: 'Mike Sckot',
    },
    {
      id: 2, name: 'The wolf', category: 'Sci-Fi', author: 'Mike Sckot',
    },
    {
      id: 3, name: 'The wolf', category: 'Sci-Fi', author: 'Mike Sckot',
    },
    {
      id: 4, name: 'The wolf', category: 'Sci-Fi', author: 'Mike Sckot',
    },
  ];

  return (
    <div>
      <ul>
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

import React from 'react';
import BooksList from '../components/BooksList';
import RegistrationBook from '../components/RegistrationBook';

const BooksPage = () => {
  const hrStyle = {
    marginTop: '2rem',
    marginBottom: '1.8rem',
    border: '1.5px solid var(--grey-border)',
  };

  return (
    <div className="page-body">
      <BooksList />
      <hr style={hrStyle} />
      <RegistrationBook />
    </div>
  );
};

export default BooksPage;

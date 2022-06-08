import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const { id, title, author, category } = props;

  const dispatch = useDispatch();

  const removeEventHandler = () => {
    dispatch(removeBook(id));
  };

  return (
    <li className="book-item-list" key={id}>
      <h3>{category}</h3>
      <h2>{title}</h2>
      <p>{author}</p>
      <button type="button" onClick={removeEventHandler}>
        Remove
      </button>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;

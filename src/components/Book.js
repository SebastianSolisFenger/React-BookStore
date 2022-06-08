import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import './style-components/Book.css';

const Book = (props) => {
  const { id, title, author, category } = props;

  const dispatch = useDispatch();

  const removeEventHandler = () => {
    dispatch(removeBook(id));
  };

  return (
    <div className="books-container">
      <div className="book-info" key={id}>
        <h3>{category}</h3>
        <h2>{title}</h2>
        <p>{author}</p>
        <div className="book-btns-container">
          <button type="button">Comments</button>
          <button type="button" onClick={removeEventHandler}>
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;

import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const RegistrationBook = () => {
  const dispatch = useDispatch();

  const registerEventBookFunc = (e) => {
    e.preventDefault();
    const { title, author } = e.target.elements;
    const newBookObj = {
      title: title.value,
      author: author.value,
    };
    dispatch(addBook(newBookObj));
  };

  return (
    <>
      <h2>Register books</h2>
      <form className="register-form" onSubmit={registerEventBookFunc}>
        <input type="text" name="title" placeholder="Insert the title.." />
        <input type="text" name="author" placeholder="Insert the author.." />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default RegistrationBook;

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const RegistrationBook = () => {
  const dispatch = useDispatch();
  const [book, changeBook] = useState({ title: '', author: '' });

  const updateTitle = (e) => {
    changeBook({
      ...book,
      title: e.target.value,
    });
  };

  const updateAuthor = (e) => {
    changeBook({
      ...book,
      author: e.target.value,
    });
  };

  const registerEventBookHandler = (e) => {
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
      <form className="register-form" onSubmit={registerEventBookHandler}>
        <input
          type="text"
          id="title"
          placeholder="Insert the title.."
          onChange={updateTitle}
        />
        <input
          type="text"
          id="author"
          placeholder="Insert the author.."
          onChange={updateAuthor}
        />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default RegistrationBook;

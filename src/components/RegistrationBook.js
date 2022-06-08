import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { registerNewBook } from '../redux/books/books';
import './style-components/RegisterBook.css';

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
    const { title, author, category } = e.target.elements;
    const newBook = {
      item_id: uuidv4(),
      title: title.value,
      author: author.value,
      category: category.value,
    };
    dispatch(registerNewBook(newBook));
    title.value = '';
    author.value = '';
    category.value = '';
  };

  return (
    <div className="register-book">
      <h2>ADD NEW BOOK</h2>
      <form className="register-form" onSubmit={registerEventBookHandler}>
        <input
          type="text"
          id="title"
          placeholder="Insert the title.."
          onChange={updateTitle}
          required
        />
        <input
          type="text"
          id="author"
          placeholder="Insert the author.."
          onChange={updateAuthor}
          required
        />
        <input
          type="text"
          id="category"
          placeholder="Category.."
          onChange={updateAuthor}
          required
        />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default RegistrationBook;

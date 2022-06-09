import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { registerNewBook } from '../redux/books/books';
import './style-components/RegisterBook.css';

const RegistrationBook = () => {
  const dispatch = useDispatch();
  const [book, changeBook] = useState({ title: '', author: '', category: '' });

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

  const updateCategory = (e) => {
    changeBook({
      ...book,
      category: e.target.value,
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
          placeholder="Book title"
          onChange={updateTitle}
          required
        />
        <input
          type="text"
          id="author"
          placeholder="Author"
          onChange={updateAuthor}
          required
        />

        <select
          // value={category}
          id="category"
          onChange={updateCategory}
          required
        >
          <option value="">Select Category</option>
          <option value="Action">Action</option>
          <option value="Sci-fi">Sci-fi</option>
          <option value="Drama">Drama</option>
          <option value="Horror">Horror</option>
        </select>

        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default RegistrationBook;

import { v4 as uuidv4 } from 'uuid';
import initialBookDataBase from './initialBookDataBase';

// ACTION TYPES

const ADD_BOOK = 'BookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'BookStore/books/REMOVE_BOOK';

// ACTION CREATORS

export const addBook = (book) => ({ type: ADD_BOOK, payload: book });
export const removeBook = (id) => ({ type: REMOVE_BOOK, payload: { id } });

// REDUCER

const books = (state = initialBookDataBase, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: uuidv4(),
          title: action.payload.title,
          author: action.payload.author,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

export default books;

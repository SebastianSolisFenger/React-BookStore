import { v4 as uuidv4 } from 'uuid';
import initialBookStateData from './initialBookStateData';

// ACTION TYPES

const ADD_BOOK = 'BookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'BookStore/books/REMOVE_BOOK';
const GET_BOOKS_SUCCESS = 'BookStore/books/GET_BOOKS_SUCCESS';
const GET_BOOKS_FAILURE = 'BookStore/books/GET_BOOKS_FAILURE';
const GET_BOOKS_LOADING = 'BookStore/books/GET_BOOKS_LOADING';

// ACTION CREATORS

export const addBook = (book) => ({ type: ADD_BOOK, payload: book });
export const removeBook = (id) => ({ type: REMOVE_BOOK, payload: id });
export const getBooksSuccess = (books) => ({
  type: GET_BOOKS_SUCCESS,
  payload: books,
});
export const getBooksFailure = () => ({
  type: GET_BOOKS_FAILURE,
});
export const getBooksLoading = () => ({
  type: GET_BOOKS_LOADING,
});

// REDUCER

const books = (state = initialBookStateData, action) => {
  switch (action.type) {
    case GET_BOOKS_LOADING:
      return {
        ...state,
        loading: true,
      };

    case GET_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        books: action.payload,
      };

    case GET_BOOKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ADD_BOOK:
      return {
        ...state,
        loading: true,
        books: [...state.books, action.payload],
      };

    default:
      return state;
  }
};

export default books;

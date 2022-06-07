import { useDispatch } from 'react-redux';
import initialBookStateData from './initialBookStateData';

const url =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/GVPYkgVk2vPICoFsmOr6/books';

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
export const getBooksFailure = (errMessage) => ({
  type: GET_BOOKS_FAILURE,
  payload: errMessage,
});
export const getBooksLoading = () => ({
  type: GET_BOOKS_LOADING,
});

// REGISTRATION BOOK
export const registerNewBook = (newBook) => (dispatch) => {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/json',
    },
    body: JSON.stringify(newBook),
  }).then(() => {
    dispatch(addBook(newBook));
  });
};

// get data

export const getBooks = () => (dispatch) => {
  dispatch(getBooksLoading());
  fetch(url)
    .then((response) => response.json)
    .then((data) => {
      const formattedBooks = [];
      Object.keys(data).forEach((key) => {
        if (key) {
          formattedBooks.push({ ...data[key][0], item_id: key });
        }
      });
      dispatch(getBooksSuccess(formattedBooks));
    })
    .catch((err) => {
      dispatch(getBooksFailure(err.message));
    });
};

// REMOVE BOOK DATA

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

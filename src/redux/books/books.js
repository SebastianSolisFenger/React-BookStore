// ACTION TYPES

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

// ACTION CREATORS

const addBook = (title) => ({ type: ADD_BOOK, payload: { title } });
const removeBook = (id) => ({ type: REMOVE_BOOK, payload: { id } });

const CHECK_STATUS = 'bookStore/books/CHECK_STATUS';

export const checkStatus = () => ({ type: CHECK_STATUS });

const categories = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
};

export default categories;

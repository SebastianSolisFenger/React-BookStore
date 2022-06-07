// ACTION TYPES FOR CATEGORIES
const CHECK_STATUS = 'CHECK_STATUS';

// ACTION CREATORS
export const checkStatus = () => ({ type: CHECK_STATUS });

const Categories = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
};

export default Categories;

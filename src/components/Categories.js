import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();

  const checkStatusEventHandler = () => {
    dispatch(checkStatus());
  };

  const status = useSelector((state) => state.categories);

  return (
    <>
      <button type="button" onClick={checkStatusEventHandler}>
        Check status
      </button>
      <div>{status}</div>
    </>
  );
};

export default Categories;

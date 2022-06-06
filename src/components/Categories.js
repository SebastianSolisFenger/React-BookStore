import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();

  const checkStatusEventHandler = () => {
    dispatch(checkStatus());
  };

  return (
    <>
      <button type="button" onClick={checkStatusEventHandler}>
        Check status
      </button>
      ;
    </>
  );
};

export default Categories;

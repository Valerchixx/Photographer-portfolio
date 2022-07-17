/* eslint-disable import/prefer-default-export */
import { REVIEWS_LOAD } from '../types';
import { loaderOn, loaderOff } from '../loader/actions';

export const getComments = () => {
  return async (dispatch) => {
    dispatch(loaderOn());
    const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=9');
    const comments = await response.json();
    setTimeout(() => {
      dispatch({ type: REVIEWS_LOAD, payload: comments });
      dispatch(loaderOff());
    }, 800);
  };
};

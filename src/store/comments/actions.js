import { COMMENTS_LOAD, COMMENTS_UPDATE } from '../types';
import { loaderOn, loaderOff } from '../loader/actions';

export const getComments = () => {
  return async (dispatch) => {
    dispatch(loaderOn());
    const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=9');
    const comments = await response.json();
    dispatch({ type: COMMENTS_LOAD, payload: comments });
    dispatch(loaderOff());
  };
};

export const updateComments = () => {
  return async (dispatch) => {
    dispatch(loaderOn());
    const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=12');
    const comments = await response.json();
    dispatch({ type: COMMENTS_UPDATE, payload: comments });
    dispatch(loaderOff());
  };
};

import { COMMENTS_LOAD, COMMENTS_UPDATE } from '../types';

const initialState = {
  items: []
};

export default function commentsReducer(action, state = initialState) {
  switch (action) {
    case COMMENTS_UPDATE:
      return {
        ...state,
        items: action.payload
      };

    case COMMENTS_LOAD:
      return {
        ...state,
        items: action.payload
      };

    default:
      return state;
  }
}

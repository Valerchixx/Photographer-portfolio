import { REVIEWS_LOAD } from '../types';

const initialState = {
  reviews: []
};

export default function reviewsReducer(state = initialState, action) {
  switch (action.type) {
    case REVIEWS_LOAD:
      return {
        ...state,
        reviews: action.payload
      };
    default:
      return state;
  }
}

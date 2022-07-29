import { REVIEWS_LOAD, LOAD_OFF, LOAD_ON } from '../types';

const initialState = {
  reviews: [],
  loading: false
};

export default function reviewsReducer(state = initialState, action) {
  switch (action.type) {
    case REVIEWS_LOAD:
      return {
        ...state,
        reviews: action.payload
      };
    case LOAD_OFF:
      return {
        ...state,
        loading: false
      };
    case LOAD_ON:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}

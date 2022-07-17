import { LOAD_OFF, LOAD_ON } from '../types';

const initialState = {
  loading: false
};

export default function loaderReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ON:
      return {
        ...state,
        loading: true
      };
    case LOAD_OFF:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}

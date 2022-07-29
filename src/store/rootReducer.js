import { combineReducers } from 'redux';
import reviewsReducer from './reviews/reviewsReducer';

const rootReducer = combineReducers({
  reviews: reviewsReducer,
});

export default rootReducer;

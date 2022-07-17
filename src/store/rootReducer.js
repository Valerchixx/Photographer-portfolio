import { combineReducers } from 'redux';
import reviewsReducer from './reviews/reviewsReducer';
import loaderReducer from './loader/loadReducer';

const rootReducer = combineReducers({
  reviews: reviewsReducer,
  loader: loaderReducer
});

export default rootReducer;

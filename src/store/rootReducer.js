import { combineReducers } from 'redux';
import commentsReducer from './comments/commentsReducer';
import loaderReducer from './loader/loaderReducer';

const rootReducer = combineReducers({
  comments: commentsReducer,
  loaderReducer
});

export default rootReducer;

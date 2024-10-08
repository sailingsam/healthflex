import { combineReducers } from 'redux';
import commentsReducer from './commentsReducers'

const rootReducer = combineReducers({
  comments: commentsReducer,
});

export default rootReducer;
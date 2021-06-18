import { combineReducers } from 'redux';
import { reducer as authReducer } from './authReducer';
import { reducer as postReducer } from './postReducer';

const rootReducers = combineReducers({
  authReducer,
  postReducer,
});

export default rootReducers;

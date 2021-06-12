import { combineReducers } from 'redux';
import { reducer as authReducer } from './authReducer';

const rootReducers = combineReducers({
  authReducer,
});

export default rootReducers;

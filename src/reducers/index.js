import { combineReducers } from 'redux';
import userReducer from './userReducer';
import shopReducer from './shopReducer';

export default combineReducers({
  user: userReducer,
  shop: shopReducer
});
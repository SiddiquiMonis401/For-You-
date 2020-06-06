import { combineReducers } from 'redux';
import  auth from './authReducer';
import { UserReducer } from './UserReducer';

export default combineReducers ({
  auth,
  UserReducer
});

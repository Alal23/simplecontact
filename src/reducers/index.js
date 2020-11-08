import { combineReducers } from 'redux';
import  ContactsReducer from './contacts';

export default combineReducers({
  contacts: ContactsReducer,
})
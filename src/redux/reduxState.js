import {createStore, combineReducers} from 'redux';
import profileReducer from './profileReducer';
import messagesReducer from './messagesReducer';
import navbarReducer from './navbarReducer';
import findUsersReducer from './findusersReducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  navbar: navbarReducer,
  findusersPage: findUsersReducer
});

let store = createStore(reducers);

window.store = store;

export default store;

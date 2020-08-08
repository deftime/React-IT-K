import {createStore, combineReducers, applyMiddleware} from 'redux';
import profileReducer from './profileReducer';
import messagesReducer from './messagesReducer';
import navbarReducer from './navbarReducer';
import findUsersReducer from './findusersReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  navbar: navbarReducer,
  findusersPage: findUsersReducer,
  auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;

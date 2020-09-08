import {requestAPI} from '../api/api';

const SET_AUTH_USER = 'setDataFromQueryToState';
const SET_ERROR_MESSAGE = 'setErrorMessageIfItHappen';

let defaultData = {
  id: null,
  login: null,
  email: null,
  isFetch: false,
  errorMessage: null
}

function authReducer(partData = defaultData, action) {
  let copyData = {...partData};
  switch (action.type) {
    case SET_AUTH_USER:
      copyData = {...action.data};
      break;
    case SET_ERROR_MESSAGE:
      copyData.errorMessage = action.msg;
      break;
    default:
      return partData;
  }
  return copyData;
}

//Actions
export let setAuthData = (id, login, email, isFetch) => ({type: SET_AUTH_USER, data: {id, login, email, isFetch}});
export let setErrorMessage = (msg) => ({type: SET_ERROR_MESSAGE, msg});

//Thunks
export function checkLogin() {
  return (dispatch) => {
    requestAPI.authMe()
    .then(data => {
      if (data.resultCode === 0) {
        let {id, login, email} = data.data;
        dispatch(setAuthData(id, login, email));
      } else if (data.resultCode === 1) {
        dispatch(setErrorMessage(data.messages[0]));
      }
    })
  }
}

export function logIn(log, pass) {
  return (dispatch) => {
    requestAPI.authLogin(log, pass)
    .then(data => {
      if (data.resultCode != 0) {
        dispatch(setErrorMessage(data.messages[0]));
      } else {
        dispatch(setErrorMessage(null));
        dispatch(setAuthData(data.data.userId))
      }
    })
  }
}

export default authReducer;

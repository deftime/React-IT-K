import {requestAPI} from '../api/api';

const SET_AUTH_USER = 'setDataFromQueryToState';

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
    default:
      return partData;
  }
  return copyData;
}

//Actions
export let setAuthData = (id, login, email, errorMessage, isFetch) => ({type: SET_AUTH_USER, data: {id, login, email, errorMessage, isFetch}});

//Thunks
export function checkLogin() {
  return (dispatch) => {
    requestAPI.authMe()
    .then(data => {
      if (data.resultCode === 0) {
        let {id, login, email} = data.data;
        dispatch(setAuthData(id, login, email));
      } else if (data.resultCode === 1) {
        dispatch(setAuthData(null, null, null, data.messages[0]));
      }
    })
  }
}

export default authReducer;

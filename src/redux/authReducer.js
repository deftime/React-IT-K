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

export let setAuthData = (id, login, email, errorMessage, isFetch) => ({type: SET_AUTH_USER, data: {id, login, email, errorMessage, isFetch}});

export default authReducer;

import {checkLogin} from './authReducer';

const SET_INIT = 'setInitializationOfApp';

let defaultData = {
  init: false
}

function appReducer(partData = defaultData, action) {
  switch (action.type) {
    case SET_INIT:
      return {
        ...partData,
        init: true
      }
    default:
      return partData;
  }
}

//actions
export let initDone = () => ({type: SET_INIT});

//thunks
export function init() {
  return (dispatch) => {
    dispatch(checkLogin())
    .then(()=>{
      dispatch(initDone());
    })

  }
}

export default appReducer;

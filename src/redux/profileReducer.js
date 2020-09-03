import {requestAPI} from '../api/api';

const ADD_WALL_POST = 'ADD_WALL_POST';
const CHG_POST_TEXT = 'CHANGE_POST_TEXT';
const SET_PROFILE = 'setCurrnetProfileOnPageByLink';
const SET_STATUS = 'setCurrentUserStatus';

let defaultData = {
  postData: [
    {id: 1, message: 'Ohh, cool site!', likes: 5 },
    {id: 2, message: 'Testing post! Send this to your wall!', likes: 0 },
    {id: 3, message: 'What are you going to do with your social network??', likes: 2 }
  ],
  newPostText: 'Enter text here...',
  currentProfile: {},
  status: ''
};

function profileReducer(partData = defaultData, action) {
  let dataCopy = {...partData};
  dataCopy.postData = [...partData.postData];
  dataCopy.currentProfile = {...partData.currentProfile};
  switch (action.type) {
    case ADD_WALL_POST:
      let objProt = {
        id: partData.postData.length + 1,
        message: partData.newPostText,
        likes: 0
      }
      dataCopy.postData.push(objProt);
      dataCopy.newPostText = '';
      break;
    case CHG_POST_TEXT:
      dataCopy.newPostText = action.text;
      break;
    case SET_PROFILE:
      dataCopy.currentProfile = action.profile;
      break;
    case SET_STATUS:
      dataCopy.status = action.status;
      break;
    default:
      return partData;
  }
  return dataCopy;
}

//Actions
export let addWallPost = () => ({type: ADD_WALL_POST});
export let changePostText = (text) => ({type: CHG_POST_TEXT, text});
export let writeProfile = (profile) => ({type: SET_PROFILE, profile});
export let setStatus = (status) => ({type: SET_STATUS, status});

//Thunks
export function setProfile(userId) {
  return (dispatch) => {
    requestAPI.getProfile(userId)
    .then(data => {
      dispatch(writeProfile(data));
    })
  }
}

export function setUserStatus(userId) {
  return (dispatch) => {
    requestAPI.getStatus(userId)
    .then(data => {
      dispatch(setStatus(data));
    })
  }
}

export function updateUserStatus(status) {
  return (dispatch) => {
    requestAPI.updateStatus(status)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    })
  }
}

export default profileReducer;

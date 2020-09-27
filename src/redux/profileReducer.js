import {requestAPI} from '../api/api';

const ADD_WALL_POST = 'ADD_WALL_POST';
const SET_PROFILE = 'setCurrnetProfileOnPageByLink';
const SET_STATUS = 'setCurrentUserStatus';
const SET_AVATAR = 'setPhotoObjectToStateFromServer';

let defaultData = {
  postData: [
    {id: 1, message: 'Ohh, cool site!', likes: 5 },
    {id: 2, message: 'Testing post! Send this to your wall!', likes: 0 },
    {id: 3, message: 'What are you going to do with your social network??', likes: 2 }
  ],
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
        message: action.postText,
        likes: 0
      }
      dataCopy.postData.push(objProt);
      break;
    case SET_PROFILE:
      dataCopy.currentProfile = action.profile;
      break;
    case SET_STATUS:
      dataCopy.status = action.status;
      break;
    case SET_AVATAR:
      dataCopy.currentProfile.photos = action.photos;
      break;
    default:
      return partData;
  }
  return dataCopy;
}

//Actions
export let addWallPost = (postText) => ({type: ADD_WALL_POST, postText});
export let writeProfile = (profile) => ({type: SET_PROFILE, profile});
export let setStatus = (status) => ({type: SET_STATUS, status});
export let setAvatar = (photos) => ({type: SET_AVATAR, photos});
// export let changePostText = (text) => ({type: CHG_POST_TEXT, text});

//Thunks
export function setProfile(userId) {
  return async (dispatch) => {
    let data = await requestAPI.getProfile(userId);
    dispatch(writeProfile(data));
  }
}

export function setUserStatus(userId) {
  return async (dispatch) => {
    let data = await requestAPI.getStatus(userId);
    dispatch(setStatus(data));
  }
}

export function updateUserStatus(status) {
  return async (dispatch) => {
    let response = await requestAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  }
}

export function changeAvatar(file) {
  return async (dispatch) => {
    let response = await requestAPI.uploadAvatar(file);
    if (response.resultCode === 0) {
      dispatch(setAvatar(response.data.photos));
    }
  }
}

export default profileReducer;

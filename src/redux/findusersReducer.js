import {requestAPI} from '../api/api';

const FOLLOW = 'follow';
const GET_DATA = 'setState';
const CHANGE_PAGE = 'changePageByPaginationClick';
const TOGGLE_LOADER = 'showOrHidePreLoader';
const TOGGLE_FOLLOW = 'disableButtonIfFollowFetchInProgress';

let defaultData = {
  users: [
    // {id: '1', name: 'Volodymyr', status: 'React padavan', country: 'Ukraine', city: 'Kyiv', follow: false},
    // {id: '2', name: 'Dimich', status: 'Sensei', country: 'Belarus', city: 'Minsk', follow: true},
    // {id: '3', name: 'Sasha', status: 'React-girl', country: 'Belarus', city: 'Minsk', follow: false},
    // {id: '4', name: 'Andrey', status: 'Developer', country: 'Ukraine', city: 'Lviv', follow: false}
  ],
  page: 1,
  count: 20,
  totalCount: 3235,
  isFetch: false,
  isFollowing: {
    id: null,
    fetch: false
  }
}

function findUsersReducer(partData = defaultData, action) {
  let copyData = {...partData};
  copyData.users = [...partData.users];
  copyData.isFollowing = {...partData.isFollowing};
  switch (action.type) {
    case FOLLOW:
      for (let i = 0; i < copyData.users.length; i++) {
        if (copyData.users[i].id === action.id) {
          copyData.users[i] = partData.users[i];
          copyData.users[i].followed = !copyData.users[i].followed;
        }
      }
      break;
    case GET_DATA:
      copyData.users = action.data;
      copyData.totalCount = action.total;
      break;
    case CHANGE_PAGE:
      copyData.page = action.slcPage;
      break;
    case TOGGLE_LOADER:
      copyData.isFetch = action.loader;
      break;
    case TOGGLE_FOLLOW:
      copyData.isFollowing.id = action.userId;
      copyData.isFollowing.fetch = action.fetch;
      break;
    default:
      return partData;
  }
  return copyData;
};


// Actions
export let follow = (id) => ({type: FOLLOW, id: id});
export let getData = (data, total) => ({type: GET_DATA, data, total});
export let changePage = (slcPage) => ({type: CHANGE_PAGE, slcPage});
export let preLoader = (loader) => ({type: TOGGLE_LOADER, loader});
export let isFollow = (userId, fetch) => ({type: TOGGLE_FOLLOW, userId, fetch});

//Thunks
export function setUsers(page, count) {
  return (dispatch) => {
    dispatch(preLoader(true));
    requestAPI.getUsers(page, count)
    .then(data => {
      dispatch(preLoader(false));
      dispatch(getData(data.items, data.totalCount));
    })
  }
}

export function toggleFollow(id, status) {
  return (dispatch) => {
    dispatch(isFollow(id, true));
    requestAPI[status](id)
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(follow(id));
      } else if (data.resultCode === 1) {
        console.log(`ERROR: ${data.messages[0]}`);
      }
      dispatch(isFollow(id, false));
    })
  }
}

export default findUsersReducer;

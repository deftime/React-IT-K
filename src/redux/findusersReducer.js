const FOLLOW = 'follow';
const GET_DATA = 'setState';
const CHANGE_PAGE = 'changePageByPaginationClick';

let defaultData = {
  users: [
    // {id: '1', name: 'Volodymyr', status: 'React padavan', country: 'Ukraine', city: 'Kyiv', follow: false},
    // {id: '2', name: 'Dimich', status: 'Sensei', country: 'Belarus', city: 'Minsk', follow: true},
    // {id: '3', name: 'Sasha', status: 'React-girl', country: 'Belarus', city: 'Minsk', follow: false},
    // {id: '4', name: 'Andrey', status: 'Developer', country: 'Ukraine', city: 'Lviv', follow: false}
  ],
  page: 23,
  count: 20,
  totalCount: 3235
}

function findUsersReducer(partData = defaultData, action) {
  let copyData = {...partData};
  copyData.users = [...partData.users];
  switch (action.type) {
    case FOLLOW:
      for (let i = 0; i < copyData.users.length; i++) {
        if (copyData.users[i].id === action.id) {
          copyData.users[i] = partData.users[i];
          copyData.users[i].follow = !copyData.users[i].follow;
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
    default:
      return partData;
  }
  return copyData;
};

export let followToggle = (id) => ({type: FOLLOW, id: id});
export let getData = (data, total) => ({type: GET_DATA, data, total});
export let changePage = (slcPage) => ({type: CHANGE_PAGE, slcPage});

export default findUsersReducer;

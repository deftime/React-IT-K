const ADD_WALL_POST = 'ADD_WALL_POST';
const CHG_POST_TEXT = 'CHANGE_POST_TEXT';

let defaultData = {
  postData: [
    {id: 1, message: 'Ohh, cool site!', likes: 5 },
    {id: 2, message: 'Testing post! Send this to your wall!', likes: 0 },
    {id: 3, message: 'What are you going to do with your social network??', likes: 2 }
  ],
  newPostText: 'Enter text here...'
};

function profileReducer(partData = defaultData, action) {
  let dataCopy = {...partData};
  dataCopy.postData = [...partData.postData];
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
    default:
      return partData;
  }
  return dataCopy;
}

export let addWallPost = () => ({type: ADD_WALL_POST});
export let changePostText = (text) => ({type: CHG_POST_TEXT, text: text});

export default profileReducer;

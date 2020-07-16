const ADD_WALL_POST = 'ADD_WALL_POST';
const CHG_POST_TEXT = 'CHANGE_POST_TEXT';

function profileReducer(partData, action) {
  switch (action.type) {
    case ADD_WALL_POST:
      let objProt = {
        id: partData.postData.length + 1,
        message: partData.newPostText,
        likes: 0
      }
      partData.postData.push(objProt);
      partData.newPostText = '';
      break;
    case CHG_POST_TEXT:
      partData.newPostText = action.text;
      break;
    default:
      return partData;
  }
  return partData;
}

export let addWallPost = () => ({type: ADD_WALL_POST});
export let changePostText = (text) => ({type: CHG_POST_TEXT, text: text});

export default profileReducer;

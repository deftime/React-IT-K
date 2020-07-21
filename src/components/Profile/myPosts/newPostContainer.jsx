import {addWallPost, changePostText} from '../../../redux/profileReducer';
import NewPost from './newPost';
import {connect} from 'react-redux';

function mapStateToProps(data) {
  return {
    newPostText: data.profilePage.newPostText
  }
};

function mapDispatchToProps(dispatch) {
  return {
    send: () => {
      dispatch(addWallPost());
    },
    changeText: (text) => {
      dispatch(changePostText());
    }
  }
}

let newPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default newPostContainer;

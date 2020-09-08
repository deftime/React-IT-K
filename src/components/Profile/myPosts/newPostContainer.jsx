import React from 'react';
import {addWallPost} from '../../../redux/profileReducer';
import NewPost from './newPost';
import {connect} from 'react-redux';

function NewPostContainer(props) {

  function submitForm(fields) {
    props.addWallPost(fields.postMsg);
  }

  return (
    <NewPost onSubmit={submitForm} />
  )
}

// function mapStateToProps(data) {
//   return {
//     newPostText: data.profilePage.newPostText
//   }
// };

// function mapDispatchToProps(dispatch) {
//   return {
//     send: () => {
//       dispatch(addWallPost());
//     },
//     changeText: (text) => {
//       dispatch(changePostText(text));
//     }
//   }
// }

export default connect(null, {addWallPost})(NewPostContainer);

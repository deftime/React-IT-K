import React from 'react';
import {addWallPost, changePostText} from '../../../redux/profileReducer';
import NewPost from './newPost';

function newPostContainer(props) {

  function addPost() {
    props.store.dispatch(addWallPost());
  }

  function chgPostText(text) {
    props.store.dispatch(changePostText(text));
  }

  return (
    <NewPost newPostText={props.store.getState().profilePage.newPostText} send={addPost} changeText={chgPostText}/>
  )
}

export default newPostContainer;

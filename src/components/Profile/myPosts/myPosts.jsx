import React from 'react';
import cls from '../../../css/profile.module.css';
import NewPost from './newPost';
import Post from './post';

function MyPosts() {
  return (
    <div>
      <NewPost />
      <Post message='Ohh, cool site!' likes='3'/>
      <Post message='Testing post! Send this to your wall!' likes='1'/>
      <Post message='What are you going to do with your social network??' likes='0'/>
    </div>
  )
}

export default MyPosts;

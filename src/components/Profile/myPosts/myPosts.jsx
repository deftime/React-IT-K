import React from 'react';
import cls from '../../../css/profile.module.css';
import NewPost from './newPost';
import Post from './post';

function MyPosts() {
  let postData = [
    {id: 1, message: 'Ohh, cool site!', likes: 5 },
    {id: 2, message: 'Testing post! Send this to your wall!', likes: 0 },
    {id: 3, message: 'What are you going to do with your social network??', likes: 2 }
  ];

  return (
    <div>
      <NewPost />
      <Post message={postData[0].message} likes={postData[0].likes} />
      <Post message={postData[1].message} likes={postData[1].likes} />
      <Post message={postData[2].message} likes={postData[2].likes} />
    </div>
  )
}

export default MyPosts;

import React from 'react';
import NewPost from './newPost';
import Post from './post';

function MyPosts(props) {

  let posts = props.data.map( post => <Post message={post.message} likes={post.likes} />);

  return (
    <div>
      <NewPost addWallPost={props.addPost} newPostText={props.newPostText} changePostText={props.changePostText}/>
      {posts}
    </div>
  )
}

export default MyPosts;

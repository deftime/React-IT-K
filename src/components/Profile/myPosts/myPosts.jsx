import React from 'react';
import NewPost from './newPost';
import Post from './post';

function MyPosts(props) {

  let posts = props.postsArr.map( post => <Post message={post.message} likes={post.likes} />);

  return (
    <div>
      <NewPost newPostText={props.newPostText} dispatch={props.dispatch}/>
      {posts}
    </div>
  )
}

export default MyPosts;

import React from 'react';
import Post from './post';
import NewPostContainer from './newPostContainer';

function MyPosts(props) {

  let posts = props.postsArr.map( post => <Post key={post.id} message={post.message} likes={post.likes} />);

  return (
    <div>
      <NewPostContainer />
      {posts}
    </div>
  )
}

export default MyPosts;

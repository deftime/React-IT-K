import React from 'react';
import cls from '../../../css/profile.module.css';

function Post(props) {
  return (
    <div className={cls.post}>
      <span className={cls.postText}>{props.message}</span>
      <span className={cls.like}>Like {props.likes}</span>
    </div>
  )
}

export default Post;

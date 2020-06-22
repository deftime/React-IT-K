import React from 'react';
import cls from '../../../css/profile.module.css';

function NewPost() {
  return (
    <div className={cls.messageBoxWrap}>
      <div>New Post</div>
      <form className={cls.sendMsg}>
        <textarea name="post_msg"></textarea><br />
        <button type="submit" name="send_msg">Send</button>
      </form>
    </div>
  )
}

export default NewPost;

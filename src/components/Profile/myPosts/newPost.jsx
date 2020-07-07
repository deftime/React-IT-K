import React from 'react';
import cls from '../../../css/profile.module.css';

function NewPost(props) {

  let postText = React.createRef();
  function sendPost() {
    props.addPost(postText.current.value);
    postText.current.value = '';
  };

  function stopRefresh(event) {
    event.preventDefault();
  };

  return (
    <div className={cls.messageBoxWrap}>
      <div>New Post</div>
      <form className={cls.sendMsg} onSubmit={stopRefresh}>
        <textarea ref={postText} name="post_msg"></textarea><br />
        <button type="submit" name="send_msg" onClick={sendPost}>Send</button>
      </form>
    </div>
  )
}

export default NewPost;

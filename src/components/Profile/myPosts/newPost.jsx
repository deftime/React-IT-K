import React from 'react';
import cls from '../../../css/profile.module.css';

function NewPost(props) {
  let postText = React.createRef();

  function sendPost() {
    props.addWallPost();
  };

  function editPostField() {
    props.changePostText(postText.current.value);
  };

  return (
    <div className={cls.messageBoxWrap}>
      <div>New Post</div>
      <form className={cls.sendMsg} onSubmit={(e)=>e.preventDefault()}>
        <textarea ref={postText} name="post_msg" value={props.newPostText} onChange={editPostField} onFocus={(e)=>e.target.value = ''}></textarea><br />
        <button type="submit" name="send_msg" onClick={sendPost}>Send</button>
      </form>
    </div>
  )
}

export default NewPost;

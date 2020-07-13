import React from 'react';
import cls from '../../../css/profile.module.css';

function NewPost(props) {

  function stopRefresh(event) {
    event.preventDefault();
  };

  function eraseField() {
    postText.current.value = '';
  };

  let postText = React.createRef();
  function sendPost() {
    props.dispatch({type: 'ADD_WALL_POST'});
  };

  function editPostField() {
    props.dispatch({type: 'CHANGE_POST_TEXT', text: postText.current.value});
  };

  return (
    <div className={cls.messageBoxWrap}>
      <div>New Post</div>
      <form className={cls.sendMsg} onSubmit={stopRefresh}>
        <textarea ref={postText} name="post_msg" value={props.newPostText} onChange={editPostField} onFocus={eraseField}></textarea><br />
        <button type="submit" name="send_msg" onClick={sendPost}>Send</button>
      </form>
    </div>
  )
}

export default NewPost;

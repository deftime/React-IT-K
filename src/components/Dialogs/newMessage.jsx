import React from 'react';
import cls from '../../css/dialogs.module.css';


function newMessage(props) {
  let msgText = React.createRef();

  function stopRefresh(event) {
    event.preventDefault();
  }

  function eraseField() {
    msgText.current.value = '';
  }

  function editMsgField() {
    props.editText(msgText.current.value);
  }

  function sendMsg() {
    props.addMessage();
  }

  return (
    <div className={cls.sendMessage}>
      <form name="sendMsgFrom" onSubmit={stopRefresh}>
        <textarea name="msgText" value={props.newMsgText} ref={msgText} onFocus={eraseField} onChange={editMsgField}></textarea><br />
        <button type="submit" name="sendButton" onClick={sendMsg}>Send</button>
      </form>
    </div>
  )
}

export default newMessage;

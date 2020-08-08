import React from 'react';
import cls from '../../../css/dialogs.module.css';


function newMessage(props) {
  let msgText = React.createRef();

  function editMsgField() {
    props.changeMsgText(msgText.current.value);
  }

  function sendMsg() {
    props.sendMessage();
  }

  return (
    <div className={cls.sendMessage}>
      <form name="sendMsgFrom" onSubmit={(e)=>e.preventDefault()}>
        <textarea name="msgText" value={props.newMsgText} ref={msgText} onFocus={(e)=>e.target.value = ''} onChange={editMsgField}></textarea><br />
        <button type="submit" name="sendButton" onClick={sendMsg}>Send</button>
      </form>
    </div>
  )
}

export default newMessage;

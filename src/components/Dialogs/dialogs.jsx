import React from 'react';
import cls from '../../css/dialogs.module.css';
import DialogItem from './dialogItem';
import Message from './message';

function Dialogs(props) {

  let dialogs = props.pageData.dialogData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);
  let messages = props.pageData.messageData.map ( message => <Message text={message.text} id={message.id} line={message.line} />);

  function stopRefresh(event) {
    event.preventDefault();
  }

  function eraseField() {
    msgText.current.value = '';
  }

  let msgText = React.createRef();
  function editMsgField() {
    props.changeMsgText(msgText.current.value);
  }

  return (
    <div className={cls.main}>
      <div className={cls.users}>
        {dialogs}
      </div>
      <div className={cls.messages}>
        <div className={cls.msgList}>
          {messages}
        </div>
        <div className={cls.sendMessage}>
          <form name="sendMsgFrom" onSubmit={stopRefresh}>
            <textarea name="msgText" value={props.pageData.newMsgText} ref={msgText} onFocus={eraseField} onChange={editMsgField}></textarea><br />
            <button type="submit" name="sendButton" onClick={props.sendMessage}>Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;

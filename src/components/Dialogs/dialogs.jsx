import React from 'react';
import cls from '../../css/dialogs.module.css';
import DialogItem from './dialogItem';
import Message from './message';
import NewMessageContainer from './newMessageContainer';
import {sendMessage, changeMsgText} from '../../redux/messagesReducer';

function Dialogs(props) {

  let dialogs = props.pageData.dialogData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);
  let messages = props.pageData.messageData.map ( message => <Message text={message.text} id={message.id} line={message.line} />);

  return (
    <div className={cls.main}>
      <div className={cls.users}>
        {dialogs}
      </div>
      <div className={cls.messages}>
        <div className={cls.msgList}>
          {messages}
        </div>
        <NewMessageContainer newMsgText={props.pageData.newMsgText} dispatch={props.dispatch} />
      </div>
    </div>
  )
}

export default Dialogs;

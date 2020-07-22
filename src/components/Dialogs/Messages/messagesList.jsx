import React from 'react';
import cls from '../../../css/dialogs.module.css';
import Message from './message';

function messageList(props) {

  let messages = props.messagesArr.map( mess => <Message key={mess.id} text={mess.text} line={mess.line} /> );

  return (
    <div className={cls.msgList}>
      {messages}
    </div>
  )
}

export default messageList;

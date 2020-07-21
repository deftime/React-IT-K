import React from 'react';
import cls from '../../../css/dialogs.module.css';
import NewMessageContainer from './newMessageContainer';
import MessagesListContainer from './messagesListContainer';

function Messages() {
  return (
    <div className={cls.messages}>
      <MessagesListContainer />
      <NewMessageContainer />
    </div>
  )
}

export default Messages;

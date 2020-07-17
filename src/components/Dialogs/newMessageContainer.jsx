import React from 'react';
import {sendMessage, changeMsgText} from '../../redux/messagesReducer';
import NewMessage from './newMessage';

function newMessageContainer(props) {

  function sendOutMessage() {
    props.dispatch(sendMessage());
  }

  function changeMessageText(text) {
    props.dispatch(changeMsgText(text));
  }

  return (
    <NewMessage newMsgText={props.newMsgText} addMessage={sendOutMessage} editText={changeMessageText} />
  )
}

export default newMessageContainer;

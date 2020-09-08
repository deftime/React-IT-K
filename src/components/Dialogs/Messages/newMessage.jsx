import React from 'react';
import cls from '../../../css/dialogs.module.css';
import {reduxForm, Field} from 'redux-form';


function newMessage(props) {

  // function editMsgField() {
  //   props.changeMsgText(msgText.current.value);
  // }
  //
  // function sendMsg() {
  //   props.sendMessage();
  // }

  return (
    <div className={cls.sendMessage}>
      <form name="sendMsgFrom" onSubmit={props.handleSubmit}>
        <Field component="textarea" name="msgText" placeholder="Enter message here..." /><br />
        <button>Send</button>
      </form>
    </div>
  )
}

export default reduxForm({form: 'newMessage'})(newMessage);

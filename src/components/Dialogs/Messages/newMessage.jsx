import React from 'react';
import cls from '../../../css/dialogs.module.css';
import {reduxForm, Field} from 'redux-form';
import {maxChars50, required} from '../../../redux/reduxForm/validators';
import {textarea} from '../../common/fieldComponents';


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
        <Field component={textarea} name="msgText" placeholder="Enter message here..." validate={[required, maxChars50]} /><br />
        <button>Send</button>
      </form>
    </div>
  )
}

export default reduxForm({form: 'newMessage'})(newMessage);

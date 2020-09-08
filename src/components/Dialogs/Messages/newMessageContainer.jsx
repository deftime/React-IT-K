import React from 'react';
import {connect} from 'react-redux';
import {sendMessage} from '../../../redux/messagesReducer';
import NewMessage from './newMessage';

function newMessageContainer(props) {

  function submitForm(fields) {
    props.sendMessage(fields.msgText);
  }

  return (
    <NewMessage onSubmit={submitForm} />
  )
}

// function mapStateToProps(data) {
//   return {
//     newMsgText: data.messagesPage.newMsgText
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     addMessage: () => {
//       dispatch(sendMessage());
//     },
//     editText: (text) => {
//       dispatch(changeMsgText(text));
//     }
//   }
// }

export default connect(null, {sendMessage})(newMessageContainer);

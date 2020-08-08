import {connect} from 'react-redux';
import {sendMessage, changeMsgText} from '../../../redux/messagesReducer';
import NewMessage from './newMessage';

function mapStateToProps(data) {
  return {
    newMsgText: data.messagesPage.newMsgText
  }
}

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

export default connect(mapStateToProps, {sendMessage, changeMsgText})(NewMessage);

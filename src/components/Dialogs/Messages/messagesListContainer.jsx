import {connect} from 'react-redux';
import MessagesList from './messagesList';

function mapStateToProps(data) {
  return {
    messagesArr: data.messagesPage.messageData
  }
}

let messagesListContainer = connect(mapStateToProps)(MessagesList);

export default messagesListContainer;

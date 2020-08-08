import {connect} from 'react-redux';
import MessagesList from './messagesList';

function mapStateToProps(data) {
  return {
    messagesArr: data.messagesPage.messageData
  }
}

export default connect(mapStateToProps)(MessagesList);

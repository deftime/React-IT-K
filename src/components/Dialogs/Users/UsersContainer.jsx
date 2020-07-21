import {connect} from 'react-redux';
import Users from './Users';

function mapStateToProps(data) {
  return {
    usersArr: data.messagesPage.dialogData
  }
}

let usersContainer = connect(mapStateToProps)(Users)

export default usersContainer;

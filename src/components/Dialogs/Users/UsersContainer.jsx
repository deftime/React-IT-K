import {connect} from 'react-redux';
import Users from './Users';

function mapStateToProps(data) {
  return {
    usersArr: data.messagesPage.dialogData
  }
}

export default connect(mapStateToProps)(Users)

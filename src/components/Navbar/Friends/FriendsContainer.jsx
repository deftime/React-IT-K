import {connect} from 'react-redux';
import Friends from './Friends';

function mapStateToProps(data) {
  return {
    friendListArr: data.navbar.friendList
  }
}

export default connect(mapStateToProps)(Friends);

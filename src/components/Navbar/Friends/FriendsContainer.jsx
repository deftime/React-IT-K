import {connect} from 'react-redux';
import Friends from './Friends';

function mapStateToProps(data) {
  return {
    friendListArr: data.navbar.friendList
  }
}

let friendsContainer = connect(mapStateToProps)(Friends);

export default friendsContainer;

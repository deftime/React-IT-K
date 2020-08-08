import MyPosts from './myPosts';
import {connect} from 'react-redux';

function mapStateToProps(data) {
  return {
    postsArr: data.profilePage.postData
  }
}

export default connect(mapStateToProps)(MyPosts);

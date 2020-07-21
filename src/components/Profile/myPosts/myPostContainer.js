import MyPosts from './myPosts';
import {connect} from 'react-redux';

function mapStateToProps(data) {
  return {
    postsArr: data.profilePage.postData
  }
}

let myPostContainer = connect(mapStateToProps)(MyPosts);

export default myPostContainer;

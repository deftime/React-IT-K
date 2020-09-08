import React from 'react';
import {withRouter} from 'react-router-dom';
import Profile from './Profile';
import {connect} from 'react-redux';
import {setProfile, setUserStatus, updateUserStatus} from '../../redux/profileReducer';
import withAuth from '../../hocs/withAuth';
import {compose} from 'redux';


class ProfileClass extends React.Component {

  componentDidMount() {
    let userId;
    if (this.props.match.params.userId) {
      userId = this.props.match.params.userId;
    } else {
      userId = this.props.userId;
    }
    this.props.setProfile(userId);
    this.props.setUserStatus(userId);

    // let userId = this.props.match.params.userId;
    // requestAPI.getProfile(userId)
    // .then(data => {
    //   this.props.setProfile(data);
    // })

    // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId ? userId : 2}`)
    //   .then(response => {
    //     this.props.setProfile(response.data);
    //   })
  }

  render() {
    return (
      <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateUserStatus}/>
    )
  }
}

function setStateToProps(data) {
  return {
    profile: data.profilePage.currentProfile,
    status: data.profilePage.status
  }
}


export default compose(
  connect(setStateToProps, {setProfile, setUserStatus, updateUserStatus}),
  withRouter,
  withAuth
)(ProfileClass);


// connect(setStateToProps, {setProfile})(withRouter(withAuth(ProfileClass)));

import React from 'react';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {connect} from 'react-redux';
import Profile from './Profile';
import {setProfile, setUserStatus, updateUserStatus, changeAvatar, updateProfile} from '../../redux/profileReducer';
import withAuth from '../../hocs/withAuth';
import {selectProfile, selectStatus} from '../../redux/selectors/reselectors';


class ProfileClass extends React.Component {

  refreshStatus() {
    let userId;
    if (this.props.match.params.userId) {
      userId = this.props.match.params.userId;
    } else {
      userId = this.props.userId;
    }
    this.props.setProfile(userId);
    this.props.setUserStatus(userId);
  }

  componentDidMount() {
    this.refreshStatus();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshStatus();
    }
  }

  render() {
    return (
      <Profile
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateUserStatus}
        isOwner={!this.props.match.params.userId}
        changeAvatar={this.props.changeAvatar}
        updateProfile={this.props.updateProfile}
      />
    )
  }
}

function setStateToProps(data) {
  return {
    profile: selectProfile(data),
    status: selectStatus(data)
  }
}


export default compose(
  connect(setStateToProps, {setProfile, setUserStatus, updateUserStatus, changeAvatar, updateProfile}),
  withRouter,
  withAuth
)(ProfileClass);


// connect(setStateToProps, {setProfile})(withRouter(withAuth(ProfileClass)));

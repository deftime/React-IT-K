import React from 'react';
import {withRouter} from 'react-router-dom';
import Profile from './Profile';
import {connect} from 'react-redux';
import * as axios from 'axios';
import {setProfile} from '../../redux/profileReducer';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId ? userId : 2}`)
      .then(response => {
        this.props.setProfile(response.data);
      })
  }

  render() {
    return (
      <Profile profile={this.props.profile} />
    )
  }
}

function setStateToProps(data) {
  return {
    profile: data.profilePage.currentProfile
  }
}


export default connect(setStateToProps, {setProfile})(withRouter(ProfileContainer));

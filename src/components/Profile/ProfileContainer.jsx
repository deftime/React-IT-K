import React from 'react';
import {withRouter} from 'react-router-dom';
import Profile from './Profile';
import {connect} from 'react-redux';
import {setProfile} from '../../redux/profileReducer';
import withAuth from '../../hocs/withAuth';
import {compose} from 'redux';


class ProfileClass extends React.Component {

  componentDidMount() {
    this.props.setProfile(this.props.match.params.userId);

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
      <Profile profile={this.props.profile} />
    )
  }
}

function setStateToProps(data) {
  return {
    profile: data.profilePage.currentProfile
  }
}


export default compose(
  connect(setStateToProps, {setProfile}),
  withRouter,
  withAuth
)(ProfileClass);


// connect(setStateToProps, {setProfile})(withRouter(withAuth(ProfileClass)));

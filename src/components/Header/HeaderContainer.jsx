import React from 'react';
import {connect} from 'react-redux';
import {logOut} from '../../redux/authReducer';
import Header from './Header';

class HeaderContainer extends React.Component {

  // componentDidMount() {
  //   this.props.checkLogin();

    // requestAPI.authMe()
    // .then(data => {
    //   if (data.resultCode === 0) {
    //     let {id, login, email} = data.data;
    //     this.props.setAuthData(id, login, email);
    //   } else if (data.resultCode === 1) {
    //     this.props.setAuthData(null, null, null, data.messages[0]);
    //   }
    // })

    // axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
    // .then(response => {
    //   if (response.data.resultCode === 0) {
    //     let {id, login, email} = response.data.data;
    //     this.props.setAuthData(id, login, email);
    //   } else if (response.data.resultCode === 1) {
    //     this.props.setAuthData(null, null, null, response.data.messages[0]);
    //   }
    // })
  // }

  render() {
    return (
      <Header {...this.props} />
    )
  }
}

function mapStateToProps(data) {
  return {
    login: data.auth.login,
    email: data.auth.email
  }
}

export default connect(mapStateToProps, {logOut})(HeaderContainer);

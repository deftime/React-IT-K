import React from 'react';
import {connect} from 'react-redux';
import {setAuthData} from '../../redux/authReducer';
import Header from './Header';
import * as axios from 'axios';

class HeaderContainer extends React.Component {

  componentDidMount() {
    // , {withCredentials: true}
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
    .then(response => {
      if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        this.props.setAuthData(id, login, email);
      } else if (response.data.resultCode === 1) {
        this.props.setAuthData(null, null, null, response.data.messages[0]);
      }
    })
  }

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

export default connect(mapStateToProps, {setAuthData})(HeaderContainer);

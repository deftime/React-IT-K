import React from 'react';
import {connect} from 'react-redux';
import {logIn} from '../../redux/authReducer';
import Login from './Login';
import {Redirect} from 'react-router-dom';

class LoginClass extends React.Component {

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.isAuth !== this.props.isAuth) {
      this.setState({
        isLogin: true
      })
    }
  }

  state = {
    isLogin: false
  }

  render() {
    if (this.state.isLogin) {
      return <Redirect to='/profile' />
    }
    return <Login logIn={this.props.logIn} error={this.props.errMsg} />
  }
}

function mapStateToProps(data) {
  return {
    errMsg: data.auth.errorMessage,
    isAuth: data.auth.id
  }
}

export default connect(mapStateToProps, {logIn})(LoginClass);

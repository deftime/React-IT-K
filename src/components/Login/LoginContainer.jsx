import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {logIn} from '../../redux/authReducer';
import Login from './Login';
import {errorMessageSelector, checkAuthSelector} from '../../redux/selectors/reselectors';

class LoginClass extends React.Component {

  render() {
    if (this.props.isAuth) {
      return <Redirect to='/profile' />
    }
    return <Login logIn={this.props.logIn} error={this.props.errMsg} />
  }
}

function mapStateToProps(data) {
  return {
    errMsg: errorMessageSelector(data),
    isAuth: checkAuthSelector(data)
  }
}

export default connect(mapStateToProps, {logIn})(LoginClass);

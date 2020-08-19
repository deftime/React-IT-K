import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

function withAuth(Component) {
  class AuthComponent extends React.Component {
    render() {
      if (!this.props.isAuth) {
        return <Redirect to='/login' />
      } else {
        return <Component {...this.props} />
      }
    }
  }

  function mapStateToProps(data) {
    return {
      isAuth: data.auth.id
    }
  }
  
  return connect(mapStateToProps)(AuthComponent);
}

export default withAuth;

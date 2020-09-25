import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import FindUsersContainer from './components/FindUsers/FindUsersContainer';
import LoginContainer from './components/Login/LoginContainer';
import {init} from './redux/appReducer';
import InitLoader from './components/common/initLoader';
import withSuspense from './hocs/withSuspense';

// import ProfileContainer from './components/Profile/ProfileContainer';
// import Dialogs from './components/Dialogs/Dialogs';
let ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
let Dialogs = React.lazy(() => import('./components/Dialogs/Dialogs'));

class App extends React.Component {

  componentDidMount() {
    this.props.init();
  }

  render() {
    if (!this.props.initStatus) {
      return (
        <div className="App">
          <InitLoader />
        </div>
      )
    }
    return (
      <div className="App">
        <div className="wrapper">
          <HeaderContainer />
          <Navbar />
            <Route exact path='/' render={withSuspense(ProfileContainer)} />
            <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)} />
            <Route path='/dialogs' render={withSuspense(Dialogs)} />
            <Route path='/users' render={ () => <FindUsersContainer /> } />
            <Route path='/login' render={ () => <LoginContainer /> } />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    initStatus: state.app.init
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, {init})
)(App);

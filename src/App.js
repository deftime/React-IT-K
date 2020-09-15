import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import Dialogs from './components/Dialogs/Dialogs';
import FindUsersContainer from './components/FindUsers/FindUsersContainer';
import LoginContainer from './components/Login/LoginContainer';
import {Route} from 'react-router-dom';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';
import {init} from './redux/appReducer';
import {connect} from 'react-redux';
import InitLoader from './components/common/initLoader';

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
            <Route exact path='/' render={ () => <ProfileContainer /> } />
            <Route path='/profile/:userId?' render={ () => <ProfileContainer /> } />
            <Route path='/dialogs' render={ () => <Dialogs /> } />
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

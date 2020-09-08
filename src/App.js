import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import Dialogs from './components/Dialogs/Dialogs';
import FindUsersContainer from './components/FindUsers/FindUsersContainer';
import LoginContainer from './components/Login/LoginContainer';
import {BrowserRouter, Route} from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;

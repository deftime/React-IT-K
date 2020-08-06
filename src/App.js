import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import Dialogs from './components/Dialogs/Dialogs';
import FindUsersContainer from './components/FindUsers/FindUsersContainer';
import {BrowserRouter, Route} from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="wrapper">
        <Header />
        <Navbar />
          <Route exact path='/' render={ () => <ProfileContainer /> } />
          <Route path='/profile' render={ () => <ProfileContainer /> } />
          <Route path='/dialogs' render={ () => <Dialogs /> } />
          <Route path='/users' render={ () => <FindUsersContainer /> } />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;

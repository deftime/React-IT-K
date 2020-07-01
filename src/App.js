import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/dialogs';
import {BrowserRouter, Route} from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="wrapper">
        <Header />
        <Navbar navData={props.data.navbar} />
          <Route exact path='/' render={ () => <Profile pageData={props.data.profilePage} /> } />
          <Route path='/profile' render={ () => <Profile pageData={props.data.profilePage} /> } />
          <Route path='/dialogs' render={ () => <Dialogs pageData={props.data.messagesPage} /> } />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;

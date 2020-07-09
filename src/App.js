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
          <Route exact path='/' render={ () => <Profile pageData={props.data.profilePage} addPost={props.addPost} changePostText={props.changePostText}/> } />
          <Route path='/profile' render={ () => <Profile pageData={props.data.profilePage} addPost={props.addPost} changePostText={props.changePostText}/> } />
          <Route path='/dialogs' render={ () => <Dialogs pageData={props.data.messagesPage} sendMessage={props.sendMessage} changeMsgText={props.changeMsgText}/> } />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;

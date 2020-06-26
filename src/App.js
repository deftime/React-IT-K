import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/dialogs';
import {BrowserRouter, Route} from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="wrapper">
        <Header />
        <Navbar />
          <Route exact path='/' render={ () => <Profile postData={props.data.postData} /> } />
          <Route path='/profile' render={ () => <Profile postData={props.data.postData} /> } />
          <Route path='/dialogs' render={ () => <Dialogs dialogData={props.data.dialogData} messageData={props.data.messageData} /> } />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;

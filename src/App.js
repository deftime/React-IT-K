import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="wrapper">
        <Header />
        <Navbar />
          <Route exact path='/' render={ () => <Profile /> } />
          <Route path='/profile' render={ () => <Profile /> } />
          <Route path='/dialogs' render={ () => <Dialogs /> } />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;

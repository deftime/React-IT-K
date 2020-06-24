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
          <Route exact path='/' component={Profile} />
          <Route path='/profile' component={Profile} />
          <Route path='/dialogs' component={Dialogs} />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './pages/header';
import Tehno from './pages/tehno';

function App() {
  return (
    <div className="App App-header">
    <img src={logo} width="300"/>
    <Header />
    <Tehno />
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <Header />
    <Tehno />
    </div>
  );
}

function Header() {
  return (
    <div className="menu">
      <a href="#">Main</a><br />
      <a href="#">Services</a><br />
      <a href="#">Contacts</a>
    </div>
  );
}

const Tehno = () => {
  return (
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JS</li>
    </ul>
  )
}

export default App;

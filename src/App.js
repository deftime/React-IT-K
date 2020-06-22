import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Navbar />
        <Profile />
      </div>
    </div>
  );
}

export default App;

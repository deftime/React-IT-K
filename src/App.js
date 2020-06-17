import React from 'react';
import './App.css';
import logolink from './images/logo.png';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <header>
          <img src={logolink} alt="main_logo" width="60" />
        </header>
        <aside>
          <a href="#">Profile</a>
          <a href="#">Messages</a>
          <a href="#">News</a>
          <a href="#">Music</a>
          <a href="#">Settings</a>
        </aside>
        <div className="main">
          <div className="user-cover main-row"></div>
          <div className="user-data main-row">
            <div className="user-ava"></div>
            <div className="user-details">
              <span>[USER_NAME]</span><br />
              <span>Age:</span><br />
              <span>Country:</span><br />
              <span>City:</span><br />
              <span>Education:</span><br />
              <span>Web:</span><br />
            </div>
          </div>
          <div className="message-box main-row">
            <div className="message-box-wrap">
              <div>New Post</div>
              <form className="send-msg">
                <textarea name="post_msg"></textarea><br />
                <button type="submit" name="send_msg">Send</button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addWallPost, changePostText, sendMessage, changeMsgText} from './redux/state';

export function renderDOM(data) {
  ReactDOM.render(
      <App data={data} addPost={addWallPost} changePostText={changePostText} sendMessage={sendMessage} changeMsgText={changeMsgText}/>,
      document.getElementById('root')
  );
}

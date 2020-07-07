import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addWallPost} from './redux/state';

export function renderDOM(data) {
  ReactDOM.render(
      <App data={data} addPost={addWallPost}/>,
      document.getElementById('root')
  );
}

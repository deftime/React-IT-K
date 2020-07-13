import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/state';

function renderDOM() {
  ReactDOM.render(
      <App data={store.getData()} dispatch={store.dispatch.bind(store)}/>,
      document.getElementById('root')
  );
}

renderDOM();
store.subscriber(renderDOM);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/reduxState';

function renderDOM() {
  ReactDOM.render(
      <App data={store.getState()} store={store} dispatch={store.dispatch.bind(store)} />,
      document.getElementById('root')
  );
}

renderDOM();
store.subscribe(renderDOM);

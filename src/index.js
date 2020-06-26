import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let data = {
  dialogData: [
    {id: 1, name: 'Dimich'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sasha'},
    {id: 4, name: 'Svetlana'},
    {id: 5, name: 'Oleg'}
  ],
  messageData: [
    {id: 1, text: 'Message, that come to me!', line: 'msgFrom'},
    {id: 2, text: 'And my answer to it!', line: 'msgTo'}
  ],
  postData: [
    {id: 1, message: 'Ohh, cool site!', likes: 5 },
    {id: 2, message: 'Testing post! Send this to your wall!', likes: 0 },
    {id: 3, message: 'What are you going to do with your social network??', likes: 2 }
  ]
}

ReactDOM.render(
    <App data={data}/>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

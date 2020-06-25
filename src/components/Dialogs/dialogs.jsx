import React from 'react';
import cls from '../../css/dialogs.module.css';
import ava from '../../images/smile.png';
import {NavLink} from 'react-router-dom';
import DialogItem from './dialogItem';
import Message from './message';

function Dialogs() {
  let dialogData = [
    {id: 1, name: 'Dimich'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sasha'},
    {id: 4, name: 'Svetlana'},
    {id: 5, name: 'Oleg'}
  ];

  let messageData = [
    {id: 1, text: 'Message, that come to me!'},
    {id: 2, text: 'And my answer to it!'}
  ];

  return (
    <div className={cls.main}>
      <div className={cls.users}>
        <DialogItem name={dialogData[0].name} id={dialogData[0].id} />
        <DialogItem name={dialogData[1].name} id={dialogData[1].id} />
        <DialogItem name={dialogData[2].name} id={dialogData[2].id} />
        <DialogItem name={dialogData[3].name} id={dialogData[3].id} />
        <DialogItem name={dialogData[4].name} id={dialogData[4].id} />
      </div>
      <div className={cls.messages}>
        <Message text={messageData[0].text} line='msgFrom' />
        <Message text={messageData[1].text} line='msgTo'/>
      </div>
    </div>
  )
}

export default Dialogs;

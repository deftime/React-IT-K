import React from 'react';
import cls from '../../../css/dialogs.module.css';
import ava from '../../../images/smile.png';
import {NavLink} from 'react-router-dom';

function DialogItem(props) {
  let userFrom = props.name;
  let path = `/dialogs/${props.id}`;

  return (
    <div className={cls.from}>
      <NavLink to={path} activeClassName={cls.active}>
        <img src={ava} alt="messFrom" width="50" />
        <div><span>{userFrom}</span></div>
      </NavLink>
    </div>
  )
}

export default DialogItem;

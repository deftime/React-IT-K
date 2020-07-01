import React from 'react';
import cls from '../../../css/navbar.module.css';
import ava from '../../../images/friend.png';

function FriendItem(props) {
  return (
    <div class={cls.friend}>
      <img src={ava} alt="ava" />
      <span>{props.name}</span>
    </div>
  )
}

export default FriendItem;

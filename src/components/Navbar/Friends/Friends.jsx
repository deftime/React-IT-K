import React from 'react';
import cls from '../../../css/navbar.module.css';
import Friend from './friendItem';

function Friends(props) {

  let friendList = props.friendListArr.map( item => <Friend key={item.id} name={item.name} /> );

  return (
    <div className={cls.navBlock}>
      <span>Friends</span>
      <div className={cls.friendsList}>
        {friendList}
      </div>
    </div>
  )
}

export default Friends;

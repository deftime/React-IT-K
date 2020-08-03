import React from 'react';
import cls from '../../css/findusers.module.css';
import ava from '../../images/post-ava.png';

function user(props) {

  function followToggle() {
    props.followChange(props.id);
  }

  return (
    <div className={cls.user}>
      <div className={cls.left}>
        <img src={ava} alt="ava" /><br/>
        <button onClick={followToggle} className={props.follow ? cls.unfollow : cls.follow}>{props.follow ? 'Unfollow' : 'Follow'}</button>
      </div>
      <div className={cls.right}>
        <div className={cls.name}>
          <span>{props.name}</span><br/>
          <span>{props.status}</span>
        </div>
        <div className={cls.location}>
          <span>{props.country}</span><br/>
          <span>{props.city}</span>
        </div>
      </div>
    </div>
  )
}

export default user;

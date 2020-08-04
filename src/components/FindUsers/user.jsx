import React from 'react';
import cls from '../../css/findusers.module.css';
import ava from '../../images/post-ava.png';

function user(props) {
  return (
    <div className={cls.user}>
      <div className={cls.left}>
        <img src={props.ava ? props.ava : ava} alt="ava" /><br/>
        <button onClick={(e) => props.followChange(props.id)} className={props.follow ? cls.unfollow : cls.follow}>{props.follow ? 'Unfollow' : 'Follow'}</button>
      </div>
      <div className={cls.right}>
        <div className={cls.name}>
          <span>{props.name}</span><br/>
          <span>{props.status ? props.status : '[no status]'}</span>
        </div>
        <div className={cls.location}>
          <span>{props.country ? props.country : '[no country]'}</span><br/>
          <span>{props.city ? props.city : '[no city]'}</span>
        </div>
      </div>
    </div>
  )
}

export default user;

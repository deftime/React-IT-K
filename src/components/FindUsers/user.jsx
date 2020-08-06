import React from 'react';
import {NavLink} from 'react-router-dom';
import cls from '../../css/findusers.module.css';
import ava from '../../images/post-ava.png';

function user(props) {
  return (
    <div className={cls.user}>
      <div className={cls.left}>
        <NavLink to={`/profile/${props.id}`}><img src={props.ava ? props.ava : ava} alt="ava" /></NavLink><br/>
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

import React from 'react';
import cls from '../../css/navbar.module.css';
import {NavLink} from 'react-router-dom';

function Menu(props) {
  return (
    <div className={cls.navBlock}>
      <NavLink to="/profile" activeClassName={cls.active}>Profile</NavLink>
      <NavLink to="/dialogs" activeClassName={cls.active}>Messages</NavLink>
      <a href="/">News</a>
      <a href="/">Music</a>
      <NavLink to="/users" className={cls.sep} activeClassName={cls.active}>Find Users</NavLink>
      <a href="/" className={cls.sep}>Settings</a>
    </div>
  )
}

export default Menu;

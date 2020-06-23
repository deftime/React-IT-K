import React from 'react';
import cls from '../css/navbar.module.css';
import {NavLink} from 'react-router-dom';

function Navbar() {
  return (
    <aside>
      <NavLink to="/profile" activeClassName={cls.active}>Profile</NavLink>
      <NavLink to="/dialogs" activeClassName={cls.active}>Messages</NavLink>
      <a href="#">News</a>
      <a href="#">Music</a>
      <a href="#">Settings</a>
    </aside>
  );
}

export default Navbar;

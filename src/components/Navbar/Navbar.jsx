import React from 'react';
import cls from '../../css/navbar.module.css';
import Menu from './menu';
import FriendsContainer from './Friends/FriendsContainer';

function Navbar(props) {
  return (
    <aside>
      <Menu />
      <FriendsContainer />
      <div className={cls.navBlock}></div>
    </aside>
  );
}

export default Navbar;

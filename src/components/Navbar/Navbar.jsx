import React from 'react';
import cls from '../../css/navbar.module.css';
import Menu from './menu';
import Friends from './Friends/Friends';

function Navbar(props) {
  return (
    <aside>
      <Menu />
      <Friends list={props.navData} />
      <div className={cls.navBlock}></div>
    </aside>
  );
}

export default Navbar;

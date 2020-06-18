import React from 'react';
import logolink from '../images/logo.png';
import cls from '../css/header.module.css';

function Header() {
  return (
    <header>
      <img src={logolink} alt="mainLogo" width="60" />
      <div className={cls.mainTitle}>My Social Network</div>
    </header>
  );
}

export default Header;

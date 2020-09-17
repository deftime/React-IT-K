import React from 'react';
import logolink from '../../images/logo.png';
import cls from '../../css/header.module.css';
import {NavLink} from 'react-router-dom';

function Header(props) {
  return (
    <header>
      <img src={logolink} alt="mainLogo" width="60" />
      <div className={cls.mainTitle}>My Social Network</div>
      <div className={cls.loginBlock}>
        {props.login
          ? <>
              <div>

              </div>
              <div>
                <span>{props.login}</span><button onClick={props.logOut}>Logout</button><br/>
                <span>{props.email}</span>
              </div>
            </>
          : <NavLink to="/login">Login</NavLink>}
      </div>
    </header>
  );
}

export default Header;

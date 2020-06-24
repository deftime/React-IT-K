import React from 'react';
import cls from '../../css/dialogs.module.css';
import ava from '../../images/smile.png';
import {NavLink} from 'react-router-dom';

function Dialogs() {
  return (
    <div className={cls.main}>
      <div className={cls.users}>
        <div className={cls.from}>
          <NavLink to="/dialogs/1" activeClassName={cls.active}>
            <img src={ava} alt="messFrom" width="50" />
            <div><span>Dmitry</span></div>
          </NavLink>
        </div>
        <div className={cls.from}>
          <NavLink to="/dialogs/2" activeClassName={cls.active}>
            <img src={ava} alt="messFrom" width="50" />
            <div><span>Andry</span></div>
          </NavLink>
        </div>
        <div className={cls.from}>
          <NavLink to="/dialogs/3" activeClassName={cls.active}>
            <img src={ava} alt="messFrom" width="50" />
            <div><span>Sasha</span></div>
          </NavLink>
        </div>
        <div className={cls.from}>
         <NavLink to="/dialogs/4" activeClassName={cls.active}>
            <img src={ava} alt="messFrom" width="50" />
            <div><span>Svetlana</span></div>
          </NavLink>
        </div>
        <div className={cls.from}>
          <NavLink to="/dialogs/5" activeClassName={cls.active}>
            <img src={ava} alt="messFrom" width="50" />
            <div><span>Oleg</span></div>
          </NavLink>
        </div>
      </div>
      <div className={cls.messages}>
        <div className={cls.msgFrom}>
          Message, that come to me!
        </div>
        <div className={cls.msgTo}>
          And my answer to it!
        </div>
      </div>
    </div>
  )
}

export default Dialogs;

import React from 'react';
import cls from '../../css/dialogs.module.css';
import ava from '../../images/smile.png';

function Dialogs() {
  return (
    <div className={cls.main}>
      <div className={cls.users}>
        <div className={cls.from}>
          <img src={ava} alt="messFrom" width="50" />
          <div><span>USER_NAME</span></div>
        </div>
        <div className={cls.from}>
          <img src={ava} alt="messFrom" width="50" />
          <div><span>USER_NAME</span></div>
        </div>
        <div className={cls.from}>
          <img src={ava} alt="messFrom" width="50" />
          <div><span>USER_NAME</span></div>
        </div>
        <div className={cls.from}>
          <img src={ava} alt="messFrom" width="50" />
          <div><span>USER_NAME</span></div>
        </div>
        <div className={cls.from}>
          <img src={ava} alt="messFrom" width="50" />
          <div><span>USER_NAME</span></div>
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

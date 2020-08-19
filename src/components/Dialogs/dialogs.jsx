import React from 'react';
import cls from '../../css/dialogs.module.css';
import UsersContainer from './Users/UsersContainer';
import Messages from './Messages/Messages';
import withAuth from '../../hocs/withAuth';

function Dialogs(props) {
  return (
    <div className={cls.main}>
      <UsersContainer />
      <Messages />
    </div>
  )
}

export default withAuth(Dialogs);

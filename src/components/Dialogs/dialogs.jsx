import React from 'react';
import {Redirect} from 'react-router-dom';
import cls from '../../css/dialogs.module.css';
import UsersContainer from './Users/UsersContainer';
import Messages from './Messages/Messages';
import store from '../../redux/reduxState';

function Dialogs(props) {
  if (!store.getState().auth.id) {
    return <Redirect to='/login' />
  }
  return (
    <div className={cls.main}>
      <UsersContainer />
      <Messages />
    </div>
  )
}

export default Dialogs;

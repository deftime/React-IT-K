import React from 'react';
import cls from '../../../css/dialogs.module.css';
import DialogsItem from './dialogItem';

function Users(props) {

  let dialogs = props.usersArr.map( user => <DialogsItem key={user.id} name={user.name} id={user.id} /> )

  return (
    <div className={cls.users}>
      {dialogs}
    </div>
  )
}

export default Users;

import React from 'react';
import cls from '../../css/findusers.module.css';
import User from './user';

function findUsers(props) {

  if (props.usersArr.length === 0) {
    props.getData([
      {id: '1', name: 'Volodymyr', status: 'React padavan', country: 'Ukraine', city: 'Kyiv', follow: false},
      {id: '2', name: 'Dimich', status: 'Sensei', country: 'Belarus', city: 'Minsk', follow: true},
      {id: '3', name: 'Sasha', status: 'React-girl', country: 'Belarus', city: 'Minsk', follow: false},
      {id: '4', name: 'Andrey', status: 'Developer', country: 'Ukraine', city: 'Lviv', follow: false}
    ]);
  }


  let users = props.usersArr.map( user => <User key={user.id} id={user.id} name={user.name} status={user.status} country={user.country} city={user.city} follow={user.follow} followChange={props.follow} /> );

  return (
    <div className={cls.main}>
      <div className={cls.inner}>
        {users}
        <div className={cls.moreButton}>
          <button>Show more...</button>
        </div>
      </div>
    </div>
  )
};

export default findUsers;

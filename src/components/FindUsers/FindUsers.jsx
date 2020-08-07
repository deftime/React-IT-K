import React from 'react';
import cls from '../../css/findusers.module.css';
import User from './user';
import loader from '../../images/loader.svg';

function FindUsers(props) {

  function buildPag() {
    let numPags = Math.ceil(props.totalItems / props.count);
    let pagsArr = [];
    for (let i = 1; i <= numPags; i++) {
      pagsArr.push(i);
    }
    return pagsArr.map( pag => <span onClick={()=>props.changePage(pag)} key={pag} className={props.page === pag ? cls.currPage : undefined}>{pag}</span> );
  }

  function buildUsers() {
    return props.usersArr.map( (user) => <User
        key={user.id}
        id={user.id}
        name={user.name}
        status={user.status}
        country={user.country}
        city={user.city}
        follow={user.followed}
        followChange={props.follow}
        ava={user.photos.small}
        buttonUserId={props.buttonUserId}
        followFetch={props.followFetch}
        toggleButton={props.toggleButton} />)
  }

  return (
    <div className={cls.main}>
      <div className={cls.inner}>
        <div className={cls.loaderWrap} style={ props.isFetch ? {opacity: 0.5} : {opacity: 1}}>
          { props.isFetch ? <div className={cls.loader}><img src={loader} alt="loader" /></div> : undefined }
          { buildUsers() }
        </div>
        <div className={cls.pagin}>
          <div className={cls.pagInner}>
            { buildPag() }
          </div>
        </div>
        <div className={cls.moreButton}>
           <button>Show more...</button>
        </div>
      </div>
    </div>
  )
}


export default FindUsers;

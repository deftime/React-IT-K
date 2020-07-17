import React from 'react';
import cls from '../../css/profile.module.css';
import MyPosts from './myPosts/myPosts';
import ProfileInfo from './profileInfo';

function Profile(props) {
  return (
    <div className={cls.main}>
      <ProfileInfo />
      <div className={`${cls.myPosts} ${cls.mainRow}`}>
      <MyPosts postsArr={props.store.getState().profilePage.postData} store={props.store}/>
      </div>
    </div>
  );
}

export default Profile;

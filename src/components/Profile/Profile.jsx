import React from 'react';
import cls from '../../css/profile.module.css';
import ProfileInfo from './profileInfo';
import MyPostsContainer from './myPosts/myPostContainer';

function Profile(props) {
  return (
    <div className={cls.main}>
      <ProfileInfo />
      <div className={`${cls.myPosts} ${cls.mainRow}`}>
      <MyPostsContainer />
      </div>
    </div>
  );
}

export default Profile;

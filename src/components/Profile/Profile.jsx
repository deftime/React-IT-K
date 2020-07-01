import React from 'react';
import cls from '../../css/profile.module.css';
import MyPosts from './myPosts/myPosts';
import ProfileInfo from './profileInfo';

function Profile(props) {
  return (
    <div className={cls.main}>
      <ProfileInfo />
      <div className={`${cls.myPosts} ${cls.mainRow}`}>
      <MyPosts data={props.pageData.postData} />
      </div>
    </div>
  );
}

export default Profile;

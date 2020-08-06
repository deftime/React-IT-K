import React from 'react';
import cls from '../../css/profile.module.css';
import ProfileInfo from './profileInfo';
import MyPostsContainer from './myPosts/myPostContainer';
import loader from '../../images/loader.svg';

function Profile(props) {
  if (!props.profile.photos) {
    return <img src={loader} alt="loader" />
  }

  return (
    <div className={cls.main}>
      <ProfileInfo
        name={props.profile.fullName}
        status={props.profile.aboutMe}
        job={props.profile.lookingForAJob}
        jobDesc={props.profile.lookingForAJobDescription}
        photo={props.profile.photos.large}
      />
      <div className={`${cls.myPosts} ${cls.mainRow}`}>
      <MyPostsContainer />
      </div>
    </div>
  );
}

export default Profile;

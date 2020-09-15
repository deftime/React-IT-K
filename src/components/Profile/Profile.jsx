import React from 'react';
import cls from '../../css/profile.module.css';
import ProfileInfo from './ProfileInfo/profileInfo';
import MyPostsContainer from './myPosts/myPostContainer';
import Loader from '../common/initLoader';
// import loader from '../../images/loader.svg';

function Profile(props) {
  if (!props.profile.photos) {
    // return <img src={loader} alt="loader" />
    return <Loader />
  }

  return (
    <div className={cls.main}>
      <ProfileInfo
        name={props.profile.fullName}
        status={props.status}
        updateStatus={props.updateStatus}
        about={props.profile.aboutMe}
        job={props.profile.lookingForAJob}
        jobDesc={props.profile.lookingForAJobDescription}
        photo={props.profile.photos.large}
        contacts={props.profile.contacts}
      />
      <div className={`${cls.myPosts} ${cls.mainRow}`}>
      <MyPostsContainer />
      </div>
    </div>
  );
}

export default Profile;

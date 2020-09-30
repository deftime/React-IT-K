import React, {useState} from 'react';
import cls from '../../css/profile.module.css';
import ProfileInfo from './ProfileInfo/profileInfo';
import ProfileEdit from './ProfileInfo/profileInfoEdit';
import MyPostsContainer from './myPosts/myPostContainer';
import Loader from '../common/initLoader';
// import loader from '../../images/loader.svg';

function Profile(props) {

  let [editMode, setMode] = useState(false);

  if (!props.profile.photos) {
    return <Loader />
  }

  function updateProfile(formData) {
    props.updateProfile(formData);
    setMode(false);
  }

  return (
    <div className={cls.main}>
      {editMode
        ? <ProfileEdit
            name={props.profile.fullName}
            about={props.profile.aboutMe}
            job={props.profile.lookingForAJob}
            jobDesc={props.profile.lookingForAJobDescription}
            contacts={props.profile.contacts}
            initialValues={props.profile}
            onSubmit={updateProfile}
            editMode={()=>{setMode(false)}}
          />
        : <ProfileInfo
            name={props.profile.fullName}
            status={props.status}
            updateStatus={props.updateStatus}
            about={props.profile.aboutMe}
            job={props.profile.lookingForAJob}
            jobDesc={props.profile.lookingForAJobDescription}
            photo={props.profile.photos.large}
            contacts={props.profile.contacts}
            isOwner={props.isOwner}
            changeAvatar={props.changeAvatar}
            editMode={()=>{setMode(true)}}
          />
      }

      <div className={`${cls.myPosts} ${cls.mainRow}`}>
      <MyPostsContainer />
      </div>
    </div>
  );
}

export default Profile;

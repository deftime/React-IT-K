import React from 'react';
import cls from '../../css/profile.module.css';

function ProfileInfo(props) {
  return (
    <div>
      <div className={`${cls.userCover} ${cls.mainRow}`}></div>
      <div className={`${cls.userData} ${cls.mainRow}`}>
        <div className={cls.userAva}></div>
        <div className={cls.userDetails}>
          <span>[USER_NAME]</span><br />
          <span>Age:</span><br />
          <span>Country:</span><br />
          <span>City:</span><br />
          <span>Education:</span><br />
          <span>Web:</span><br />
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;

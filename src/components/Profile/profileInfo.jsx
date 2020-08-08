import React from 'react';
import cls from '../../css/profile.module.css';

function ProfileInfo(props) {

  let iconArr = [];
  for (let key in props.contacts) {
    if (props.contacts[key]) {
      iconArr.push(<a href={props.contacts[key]} className={cls[key]}></a>);
    } else {
      continue;
    }

  }

  // <a href="#" className={cls.facebook}></a>
  // <a href="#" className={cls.twitter}></a>
  // <a href="#" className={cls.vk}></a>
  // <a href="#" className={cls.youtube}></a>
  // <a href="#" className={cls.instagram}></a>
  // <a href="#" className={cls.github}></a>
  // <a href="#" className={cls.website}></a>

  return (
    <div>
      <div className={`${cls.userCover} ${cls.mainRow}`}></div>
      <div className={`${cls.userData} ${cls.mainRow}`}>
        <div className={cls.userAva} style={props.photo ? {backgroundImage: `url(${props.photo})`} : undefined}></div>
        <div className={cls.userDetails}>
          <div className={cls.name}>
            <span>{props.name}</span><br />
            <span>{props.status}</span><br />
          </div>
          <div className={cls.links}>
            {iconArr}
          </div>
          <div className={cls.job}>
            <span>{props.job ? 'Looking for job!' : 'Now working or dont need a job...'}</span>
            <div className={cls.jobDesc}>
              {props.jobDesc}
            </div>

          </div>


        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;

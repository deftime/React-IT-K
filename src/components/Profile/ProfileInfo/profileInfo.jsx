import React from 'react';
import cls from '../../../css/profile.module.css';
import Status from './status';

function ProfileInfo(props) {

  function buildIcons() {
    let iconArr = [];
    for (let key in props.contacts) {
      if (props.contacts[key]) {
        iconArr.push(<a key={key} href={props.contacts[key]} className={cls[key]}></a>);
      } else {
        continue;
      }
    }
    return iconArr;
  }

  function photoSelected(event) {
    props.changeAvatar(event.target.files[0]);
  }

  return (
    <div>
      <div className={`${cls.userCover} ${cls.mainRow}`}></div>
      <div className={`${cls.userData} ${cls.mainRow}`}>
        <div className={cls.userAva} style={props.photo ? {backgroundImage: `url(${props.photo})`} : undefined}>
          {props.isOwner
            ? <div className={cls.changeAva}><label htmlFor="chgAva" className={cls.changeAvaButt}>Change...<input id="chgAva" type="file" onChange={photoSelected} /></label></div>
            : undefined
          }
        </div>
        <div className={cls.userDetails}>
          <div className={cls.name}>
            <span>{props.name}</span>{props.isOwner ? <button onClick={props.editMode}>Edit Profile</button> : undefined}<br />
            <Status status={props.status} updateStatus={props.updateStatus} />
          </div>
          <div className={cls.links}>
            {buildIcons()}
          </div>
          <div className={cls.job}>
            {props.job
              ? <span className={cls.looking} style={{backgroundColor: 'green'}}>Looking for job</span>
              : <span className={cls.looking} style={{backgroundColor: 'red'}}>NOT looking for job</span>}
            <div className={cls.jobDesc}>
              {props.jobDesc}
            </div>
            <span className={cls.aboutMe}>{props.about ? 'About Me:' : ''}</span>
            <div>
              {props.about}
            </div>

          </div>


        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;

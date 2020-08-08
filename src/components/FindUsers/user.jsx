import React from 'react';
import {NavLink} from 'react-router-dom';
import cls from '../../css/findusers.module.css';
import ava from '../../images/post-ava.png';

function user(props) {

  function followUn() {
    if (!props.follow) {
      props.toggleFollow(props.id, 'follow');

      // props.toggleButton(props.id, true);
      // requestAPI.follow(props.id)
      // .then(data => {
      //   if (data.resultCode === 0) {
      //     props.followChange(props.id);
      //   } else if (data.resultCode === 1) {
      //     console.log(`ERROR: ${data.messages[0]}`);
      //   }
      //   props.toggleButton(props.id, false);
      // })

      // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, null, {
      //   withCredentials: true,
      //   headers: {
      //     'API-KEY' : '8096ef0b-673f-4468-8b4b-134f855c155a'
      //   }
      // })
      //   .then(response => {
      //     if (response.data.resultCode === 0) {
      //       props.followChange(props.id);
      //     } else if (response.data.resultCode === 1) {
      //       console.log(`ERROR: ${response.data.messages[0]}`);
      //     }
      //   })
    } else if (props.follow) {
      props.toggleFollow(props.id, 'unfollow');

      // props.toggleButton(props.id, true);
      // requestAPI.unfollow(props.id)
      // .then(data => {
      //   if (data.resultCode === 0) {
      //     props.followChange(props.id);
      //   } else if (data.resultCode === 1) {
      //     console.log(`ERROR: ${data.messages[0]}`);
      //   }
      //   props.toggleButton(props.id, false);
      // })

      // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {
      //   withCredentials: true,
      //   headers: {
      //     'API-KEY' : '8096ef0b-673f-4468-8b4b-134f855c155a'
      //   }
      // })
      //   .then(response => {
      //     if (response.data.resultCode === 0) {
      //       props.followChange(props.id);
      //     } else if (response.data.resultCode === 1) {
      //       console.log(`ERROR: ${response.data.messages[0]}`);
      //     }
      //   })
    }
  }

  return (
    <div className={cls.user}>
      <div className={cls.left}>
        <NavLink to={`/profile/${props.id}`}><img src={props.ava ? props.ava : ava} alt="ava" /></NavLink><br/>
        <button onClick={followUn} disabled={props.id === props.buttonUserId && props.followFetch} className={props.follow ? cls.unfollow : cls.follow}>{props.follow ? 'Unfollow' : 'Follow'}</button>
      </div>
      <div className={cls.right}>
        <div className={cls.name}>
          <span>{props.name}</span><br/>
          <span>{props.status ? props.status : '[no status]'}</span>
        </div>
        <div className={cls.location}>
          <span>{props.country ? props.country : '[no country]'}</span><br/>
          <span>{props.city ? props.city : '[no city]'}</span>
        </div>
      </div>
    </div>
  )
}

export default user;

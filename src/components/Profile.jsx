import React from 'react';
import cls from '../css/profile.module.css';

function Profile() {
  return (
    <div className={cls.main}>
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
      <div className={`${cls.messageBox} ${cls.mainRow}`}>
        <div className={cls.messageBoxWrap}>
          <div>New Post</div>
          <form className={cls.sendMsg}>
            <textarea name="post_msg"></textarea><br />
            <button type="submit" name="send_msg">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;

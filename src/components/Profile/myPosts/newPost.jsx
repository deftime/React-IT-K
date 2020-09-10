import React from 'react';
import cls from '../../../css/profile.module.css';
import {reduxForm, Field} from 'redux-form';
import {minChars3, maxChars50, required} from '../../../redux/reduxForm/validators';
import {textarea} from '../../common/fieldComponents';

function NewPost(props) {

  // function sendPost() {
  //   props.addWallPost();
  // };

  return (
    <div className={cls.messageBoxWrap}>
      <div>New Post</div>
      <form onSubmit={props.handleSubmit} className={cls.sendMsg}>
        <Field component={textarea} name="postMsg" placeholder="Enter text here..." validate={[minChars3, maxChars50, required]} /><br />
        <button>Send</button>
      </form>
    </div>
  )
}

export default reduxForm({form: 'newPost'})(NewPost);

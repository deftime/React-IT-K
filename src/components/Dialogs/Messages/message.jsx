import React from 'react';
import cls from '../../../css/dialogs.module.css';

function Message(props) {
  return (
    <div className={cls[props.line]}>
      {props.text}
    </div>
  )
}

export default Message;

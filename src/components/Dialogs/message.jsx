import React from 'react';
import cls from '../../css/dialogs.module.css';

function Message(props) {
  let where = cls[props.line];
  return (
    <div className={where}>
      {props.text}
    </div>
  )
}

export default Message;

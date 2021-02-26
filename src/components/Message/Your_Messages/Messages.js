import React from 'react';
import s from './Messages.module.css'

const Your_Messages = (props) => {
  return (
    <div className={s.content}>
      <p>{props.user}</p>
      <p>{props.text}</p>
    </div>
  );
}
export default Your_Messages;
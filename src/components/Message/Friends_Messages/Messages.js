import React from 'react';
import s from './Messages.module.css'

const Friends_Messages = (props) => {
  return (
    <div className={s.content}>
      <p>{props.name}</p>
      <p>{props.text}</p>
    </div>
  );
}
export default Friends_Messages;
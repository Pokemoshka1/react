import React from 'react';
import s from './Target.module.css'
import Like from '../../../Like/Like'

const Target = (props) => {
  return (
      <div className={s.Post}>
        <p>Цель номер {props.id}</p>
        <p>{props.post}</p>
        <Like like={props.like} />
      </div>
  );
}

export default Target 
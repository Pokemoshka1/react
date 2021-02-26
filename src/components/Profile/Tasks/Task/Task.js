import React from 'react';
import s from './Task.module.css'
import Like from '../../../Like/Like'

const Task = (props) => {
  return (
      <div className={s.Post}>
        <p>Задача номер {props.id}</p>
        <p>{props.post}</p>
        <Like like={props.like}/>
      </div>
  );
}

export default Task 
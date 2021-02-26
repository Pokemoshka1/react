import React from 'react';
import s from './New.module.css'
import avatar from '../../../avatarka.png';
import {NavLink} from "react-router-dom"
import Like from '../../Like/Like'

const New = (props) => {
  return (
    <div className={s.new}>
      <div className={s.name}>
        <img src={avatar} />
        <NavLink to='/Profile'>{props.name}</NavLink>
      </div>
      <div className={s.content}>
        <p>{props.text}</p>
        <Like like={props.like} />
      </div>
    </div>
  );
}

export default New;
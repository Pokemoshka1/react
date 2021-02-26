import React from 'react';
import s from './Name.module.css'
import {NavLink} from "react-router-dom"

const Name = (props) => {
  let path = '/Message/' + props.id
  return (
    <div className={s.content}>
      <NavLink to={path} className={s.link}>{props.name}</NavLink>
    </div>
  );
}
export default Name;
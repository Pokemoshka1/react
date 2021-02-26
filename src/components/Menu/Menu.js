import React from 'react';
import s from './Menu.module.css'
import {NavLink} from "react-router-dom"

const Menu = (props) => {
  return (
      <nav className={s.Menu}>
        <NavLink to="/Profile" className={s.menu}>Профиль</NavLink>
        <NavLink to="/Message" className={s.menu}>Сообщения</NavLink>
        <NavLink to="/News" className={s.menu}>Новости</NavLink>
        <NavLink to="" className={s.menu}>Музыка</NavLink>
        <NavLink to="" className={s.menu}>Настройки</NavLink>
      </nav>
  );
}

export default Menu;
import React from 'react';
import vk from './../../Vk.png';
import s from './Header.module.css'

const Header = (props) => {
  return (
      <header className={s.Header}>
        <img src={vk} className={s.img} />
        <input type="text" placeholder="Поиск" />
      </header>
  );
}

export default Header;
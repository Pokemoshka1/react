import React from 'react';
import s from './Achievements.module.css'

const Achievements = (props) => {
  return (
      <p>
        {props.text}:{props.int}
      </p>
  );
}

export default Achievements;
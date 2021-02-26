import React from 'react';
import s from './About_Myself.module.css'


const About_Myself = (props) => {
  return (
      <div className={s.Post}>
        <p>{props.text}:{props.answer}</p>
      </div>
  );
}

export default About_Myself 
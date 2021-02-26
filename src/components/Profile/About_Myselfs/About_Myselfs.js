import React from 'react';
import s from './About_Myselfs.module.css'
import About_Myself from './About_Myself/About_Myself'
const About_Myselfs = (props) => {
  let AboutElements = props.about_myself.map( t => <About_Myself
  text={t.text} answer={t.answer}/>) 
  return (
      <div>
        <button>Редактировать</button>
        {AboutElements}
      </div>
  );
}

export default About_Myselfs 
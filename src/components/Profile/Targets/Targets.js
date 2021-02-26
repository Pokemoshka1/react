import React from 'react';
import s from './Targets.module.css'
import Target from './Target/Target'


const Targets = (props) => {
  let TargetElements = props.target.map( t => <Target id={t.id} post={t.post} like={t.like} />)
  
  let newTargetElement = React.createRef();

  let addTarget = () => {
    let text = newTargetElement.current.value;
    props.addTarget(text);
    newTargetElement.current.value = '';
  }
  return (
      <div>
        <textarea ref={newTargetElement} placeholder="Задай себе цель..."/><button onClick={addTarget}>ADD</button>
        {TargetElements}
      </div>
  );
}

export default Targets 
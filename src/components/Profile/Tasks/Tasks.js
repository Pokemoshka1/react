import React from 'react';
import s from './Tasks.module.css'
import Task from './Task/Task'


const Tasks = (props) => {
  let TaskElements = props.tasks.map( t => <Task id={t.id} post={t.post} like={t.like} />)

  let newTaskElement = React.createRef();

  let addTask = () => {
    let text = newTaskElement.current.value;
    props.addTask(text);
    newTaskElement.current.value = '';
  }

  let onTaskChange = () => {
    let text = newTaskElement.current.value;
    props.updateNewTaskText(text);
  }

  return (
      <div>
        <textarea ref={newTaskElement} onChange={onTaskChange} placeholder="Придумай себе задачу..." value={props.newTaskText}/><button onClick={addTask}>ADD</button>
        {TaskElements}
      </div>
  );
}

export default Tasks 
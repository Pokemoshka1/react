import React from 'react';
import s from './News.module.css'
import New from './New/New'

const News = (props) => {
  let NewElements = props.new.map( n => <New id={n.id} name={n.name} text={n.text} like={n.like} />);

  let newNewsElement = React.createRef();

  let addNews = () => {
    let text = newNewsElement.current.value;
    props.addNews(text);
    newNewsElement.current.value = '';
  }

  return (
    <div className={s.content}>
      <textarea ref={newNewsElement} placeholder='Есть что-то новое?' className={s.textarea}/>
      <button onClick={addNews}>Post</button>
      {NewElements}
    </div>
  );
}

export default News;
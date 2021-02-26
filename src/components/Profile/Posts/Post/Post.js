import React from 'react';
import s from './Post.module.css'
import Like from '../../../Like/Like'

const Post = (props) => {
  return (
      <div className={s.Post}>
        <p>{props.post}</p>
        <Like like={props.like} />
      </div>
  );
}

export default Post 
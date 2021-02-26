import React from 'react';
import s from './Posts.module.css'
import Post from './Post/Post'
const Posts = (props) => {
  let PostElements = props.post.map( p => <Post id={p.id} post={p.post} like={p.like} />)

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }
  return (
      <div>
        <textarea ref={newPostElement} onChange={onPostChange} placeholder="Расскажи что-нибудь..." value={props.newPostText}/><button onClick={addPost}>ADD</button>
        {PostElements}
      </div>
  );
}

export default Posts 
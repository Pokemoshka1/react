import React from 'react';
import avatar from './../../avatarka.png';
import s from './Profile.module.css'
import Achievements from './Achievements/Achievements'
import {Route, NavLink} from "react-router-dom"
import Posts from './Posts/Posts'
import Targets from './Targets/Targets'
import Tasks from './Tasks/Tasks'
import About_Myselfs from './About_Myselfs/About_Myselfs'

const Links = (props) => {
  return (
    <div className={s.link}>
        <NavLink to='/Profile/Tasks' className={s.links}>Tasks</NavLink>
        <NavLink to='/Profile/About_Myselfs' className={s.links}>About myself</NavLink>
        <NavLink to='/Profile/Targets' className={s.links}>Targets</NavLink>
        <NavLink to='/Profile/Posts' className={s.links}>Posts</NavLink>
    </div>
  )
}
const Profile = (props) => {
  return (
    <div className={s.Content}>
      <div className={s.achievements1}>
        <Achievements text='Завершено задач' int='3' /><br />
        <Achievements text='Подписчики' int='34' />
      </div>
      <div className={s.achievements2}>
        <Achievements text='Друзья' int='132'/><br />
        <Achievements text='Пройдённо целей' int='1'/>
      </div>
      <Links />
      <p className={s.avatar}>
        <img src={avatar}/>
      </p>
      <div className={s.contents}>
        <Route path='/Profile/Posts' render={() => <Posts post={props.state.post} newPostText={props.state.newPostText} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />} />
        <Route path='/Profile/Targets' render={() => <Targets target={props.state.target} addTarget={props.addTarget} />} />
        <Route path='/Profile/Tasks' render={() => <Tasks tasks={props.state.tasks} addTask={props.addTask} updateNewTaskText={props.updateNewTaskText} />} />
        <Route path='/Profile/About_Myselfs' render={() => <About_Myselfs about_myself={props.state.about_myself} />} />
      </div>
    </div>
  );
}

export default Profile;
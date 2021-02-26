import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addTask} from './Redux/State'
import {addTarget} from './Redux/State'
import {addPost} from './Redux/State'
import {addNews} from './Redux/State'
import {updateNewPostText} from './Redux/State'
import {updateNewTaskText} from './Redux/State'

export let rerender = (State) => {
  ReactDOM.render(<App state={State} addPost={addPost} addNews={addNews} addTarget={addTarget} addTask={addTask} updateNewPostText={updateNewPostText} updateNewTaskText={updateNewTaskText} />, document.getElementById('root'));
}

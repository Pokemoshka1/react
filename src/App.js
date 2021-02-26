import React from 'react';
import TaskData from './index.js'
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import Message from './components/Message/Message'
import Menu from './components/Menu/Menu'
import News from './components/News/News'
import './App.css';
import {BrowserRouter, Route} from "react-router-dom"

const App = (props) => {
  return (
      <BrowserRouter>
        <div className="App">
          <Header /><br />
          <Menu />
          <Route path='/Profile' 
            render={ () => <Profile 
              state={props.state.profilePage} addPost={props.addPost} addTarget={props.addTarget} addTask={props.addTask} updateNewPostText={props.updateNewPostText} updateNewTaskText={props.updateNewTaskText} />} />
          <Route path='/Message' 
            render={ () => <Message 
              state={props.state.messagePage} /> } />
          <Route path='/News' 
            render={ () => <News 
              new={props.state.newPage.news} addNews={props.addNews}/> } />
        </div>
      </BrowserRouter>
  );
}
export default App;

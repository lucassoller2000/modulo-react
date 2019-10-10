import React, { Component } from 'react';
import LoginForm from "./components/LoginForm/LoginForm"
import Home from './components/Home/Home'
import NotFound from './components/NotFound/NotFound'
import NewPost from './components/NewPost/NewPost'
import Post from './components/Posts/Post/Post'
import EditPost from './components/EditPost/EditPost'
import { Switch, Route, Redirect} from 'react-router-dom'
import './App.css';
import UserPosts from './components/UserPosts/UserPosts' 

class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
            <Route path="/404" component={NotFound} />
            <Route path="/home" component={Home} />    
            <Route path="/" exact component={LoginForm} />
            <Route path="/newPost" component={NewPost} />
            <Route path="/editPost/:id" component={EditPost} />
            <Route path="/post/:id" component={Post} />
            <Route path="/userPosts/:username" component={UserPosts} />
            <Redirect to="/404"/>
          </Switch>
      </div>
    );
  }
}

export default App;
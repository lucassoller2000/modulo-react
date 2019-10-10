import React, { Component } from 'react';
import './App.css'
import Posts from './components/Posts/Posts'
import FormPost from './components/FormPost/FormPost'
class App extends Component {

  constructor() {
    super()
    this.onSubmitForm = this.onSubmitForm.bind(this)
    this.onRemove = this.onRemove.bind(this)
    this.state = {
      posts: []
    }
  }


  onSubmitForm(post) {
    let posts = this.state.posts
    posts.push(post)
    this.setState({
      posts
    })
  }

  onRemove(item) {
    let posts = this.state.posts
    let post = posts.filter((item)=>{
      return posts.post === item
    })

    posts.splice(post)

    this.setState({
      post
    })
  }

  render() {
    return (
      <div className="col-md-12 classe">
        <div className="col-md-6">
            <div>
              <FormPost onSubmitForm={this.onSubmitForm} />
            </div>
        </div>
        <div className="col-md-6">
          <div className="col-md-9 atributtes">
            <div>Nome</div><div>Alter Ego</div><div>Time</div>
          </div>
          <div>
            <Posts posts={this.state.posts} onRemove={this.onRemove} id={this.createId}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;

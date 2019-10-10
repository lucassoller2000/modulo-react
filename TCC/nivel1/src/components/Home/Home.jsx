import React from 'react'
import Button from '../generic/Button/Button'
import LoginService from '../../Services/LoginService'
import { Redirect, Link} from 'react-router-dom'
import Posts from '../Posts/Posts'
import './Home.css'
import {
    Navbar,
    Nav,
    NavItem,
  } from 'reactstrap';

export default class Home extends React.Component {
constructor(){
    super()
    this.onClickLogoutButton = this.onClickLogoutButton.bind(this)
    this.onClickNewPostButton = this.onClickNewPostButton.bind(this)
    this.state = {
        shouldRedirectLogin: false,
        shouldRedirectNewPost: false,
        posts: []
    }
}

onClickLogoutButton(){
    LoginService.logout()
    .then((result) =>{
        this.setState({
            shouldRedirectLogin: true
        })
    })
}

onClickNewPostButton(){
    this.setState({
        shouldRedirectNewPost: true
    })
}

renderToken(){
    if(!localStorage.getItem('logged_user')){
        this.setState({
            shouldRedirectLogin : true
        })
    }
}

renderNewPost(){
    if(this.state.shouldRedirectNewPost){
        return <Redirect to='/newPost'/>
    } 
}
render() {
    if(this.state.shouldRedirectLogin){
        return <Redirect to='/' />
    }
    return(
            <div className="homePage">
            {this.renderToken()}
                <div className="navBar"> 
                    <Navbar color="light" light expand="md">
                    <div className="Home--pageTitle">Home</div>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link className="App--link" to='/' onClick={this.onClickLogoutButton}>Logout</Link>
                        </NavItem>
                    </Nav>
                    </Navbar>
                </div>
                {this.renderNewPost()}
                <Posts />
                <Button
                    type="button"
                    text="Novo post"
                    onClick={this.onClickNewPostButton} 
                    classButton="primary"
                    class="newPost--button"
                />
        </div>)
    }
}
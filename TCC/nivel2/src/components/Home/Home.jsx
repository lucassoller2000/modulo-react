import React from 'react'
import Button from '../generic/Button/Button'
import LoginService from '../../Services/LoginService'
import { Redirect, Link} from 'react-router-dom'
import Posts from '../Posts/Posts'
import Input from '../generic/Input/Input'
import './Home.css'
import {
    Navbar,
    Nav,
    NavItem,
  } from 'reactstrap';

export default class Home extends React.Component {
constructor(){
    super()
    this.onClickPesquisarButton= this.onClickPesquisarButton.bind(this)
    this.onClickLogoutButton = this.onClickLogoutButton.bind(this)
    this.onClickNewPostButton = this.onClickNewPostButton.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = this.getInitialState()    
    this.state = {
        shouldRedirectNewPost: false,
        shouldRedirectUserPosts: false,
        posts: [],
    }
}

getInitialState() {
    return {
        pesquisar: '',
    }
}

handleChange(event) {
    const target = event.target 
    const value = target.value
    const name = target.name
    this.setState({
        [name]: value
    })
}

onClickPesquisarButton(){
    this.setState({
        shouldRedirectUserPosts: true,
    })
}

onClickLogoutButton(){
    LoginService.logout()
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

render() {
    if(this.state.shouldRedirectLogin){
        return <Redirect to='/' />
    }
    if(this.state.shouldRedirectNewPost){
        return <Redirect to='/newPost'/>
    } 
    if(this.state.shouldRedirectUserPosts) {
        return <Redirect to={"/userPosts/" +`${this.state.pesquisar}`} />
    }
    return(
            <div className="homePage">
            {this.renderToken()}
                <div className="navBar"> 
                    <Navbar color="light" light expand="md">
                    <div className="Home--pageTitle">Home</div>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                        <div className="pesquisar">
                            <Input
                                handleChange={this.handleChange}
                                name="pesquisar"
                                type="text"
                                className="pesquisar--input"
                                placeholder="Pesquisar posts de usuários"
                                value={this.state.pesquisar}
                            />
                        <Button
                            type="button"
                            text="Pesquisar"
                            onClick={this.onClickPesquisarButton} 
                            classButton="primary"
                            class="pesquisar--button"
                        /></div>
                        </NavItem>
                        <NavItem>
                            <Link className="App--link" to='/' onClick={this.onClickLogoutButton}>Logout</Link>
                        </NavItem>
                    </Nav>
                    </Navbar>
                </div>
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
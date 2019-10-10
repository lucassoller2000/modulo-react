import React from 'react'
import ApiService from '../../../Services/ApiService'
import LoginService from '../../../Services/LoginService'
import {Link} from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import './Post.css'
import {
    Navbar,
    Nav,
    NavItem,
  } from 'reactstrap';

  export default class Post extends React.Component {

    constructor() {
        super()
        this.state = {
            post: ''
        }
    }

    componentDidMount() {
        this.loadPost()
    }
    
    loadPost() {
        const loggedUser = LoginService.getLoggedUser()
        ApiService.getPost(loggedUser.accessToken, loggedUser.name, this.props.match.params.id).then((resp) => {
            this.setState({
                post: resp.data
            })
        })
    }

    markdownTitle(title){
        return <ReactMarkdown source={title} />
    }

    markdownText(text){
        return<ReactMarkdown source={text} />
    }
    render() {
        return (
            <div className="Post">
            <div className="navBar"> 
                    <Navbar color="light" light expand="md">
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link className="App--link" to='/home' onClick={this.onClickHomeButton}>Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="App--link" to='/' onClick={this.onClickLogoutButton}>Logout</Link>
                        </NavItem>
                    </Nav>
                    </Navbar>
                </div>
                <div className="Post--container">
                <div className="Post--content">
                    <div className="Post--title">
                    <h1>{this.markdownTitle(this.state.post.title)}</h1>
                    </div>
                    <div className="Post--content--image">
                        <img alt="" className="Post--image" src={this.state.post.image}/>
                    </div>
                    <div className="Post--text">
                        <h2>{this.markdownText(this.state.post.text)}</h2>
                    </div>
                </div>
                </div>   
            </div>)
    }
}
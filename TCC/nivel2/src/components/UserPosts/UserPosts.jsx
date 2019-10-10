import React from 'react'
import ApiService from '../../Services/ApiService'
import LoginService from '../../Services/LoginService'
import Jumbotron from '../generic/Jumbotron/Jumbotron'
import {Link} from 'react-router-dom'
import PostCardUser from '../Posts/PostCard/PostCardUser'
import '../Home/Home.css'
import '../Posts/Post/Post.css'
import {
    Navbar,
    Nav,
    NavItem,
  } from 'reactstrap';

export default class UserPosts extends React.Component {
    constructor() {
        super()
        this.onClickLogoutButton = this.onClickLogoutButton.bind(this)
        this.state = {
            posts: [],
            username: ''
        }
    }
    onClickLogoutButton(){
        LoginService.logout()
    }

    componentDidMount() {
        this.loadPosts()
    }
    
    loadPosts() {
        const username = this.props.match.params.username
        const loggedUser = LoginService.getLoggedUser()
        ApiService.getPosts(loggedUser.accessToken, username)
        .then((resp) => {
            this.setState({
                posts: resp.data.posts,
                username: username
            })
        })
    }

    renderPosts() {
        if (this.state.posts.length) {
            const posts = this.state.posts.map((post) => {
                return <div key={post.id}>
                    <PostCardUser
                        image={post.image}
                        title={post.title}
                        text={post.text}
                        description={post.description}
                        id={post.id}
                    />
                </div>
            })
            return <div className="Posts--content">
                {posts}
            </div>
        }
        else{
            return <div className="Posts--empty">
            <Jumbotron className="UserPosts--jumbotron" title="Nenhum post para mostrar"/> 
        </div>
        }
    }
    render() {
        return <div className="UserPosts">
        <div className="navBar"> 
                    <Navbar color="light" light expand="md">
                    <div className="Home--pageTitle">{this.state.username}</div>
                    <Nav className="ml-auto" navbar>
                       <NavItem>
                            <Link className="App--link" to='/home' >Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="App--link" to='/' onClick={this.onClickLogoutButton}>Logout</Link>
                         
                        </NavItem>
                    </Nav>
                    </Navbar>
                </div>
                <div className="Posts">
            { this.renderPosts()}</div>
        </div>
    }
}
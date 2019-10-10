import React from 'react'
import PostCard from './PostCard/PostCard'
import ApiService from '../../Services/ApiService'
import LoginService from '../../Services/LoginService'
import Jumbotron from '../generic/Jumbotron/Jumbotron'
import Modal from '../generic/Modal/Modal'
import { Redirect} from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import './Posts.css'
export default class Posts extends React.Component {

    constructor() {
        super()
        this.state = {
            selectedPost: {},
            selectedPostToDelete: {},
            shouldRedirectNewPost: false,
            shouldRedirectEditPost: false,
            shouldRedirectPost: false,
            posts: [],
            idToEdit: '',
            idToReadMore: '',
        }

        this.onClickDeleteButton = this.onClickDeleteButton.bind(this)
        this.onClickEditButton = this.onClickEditButton.bind(this)
        this.onCloseModalSelectedPost = this.onCloseModalSelectedPost.bind(this)
        this.onCloseModalSelectedPostToDelete = this.onCloseModalSelectedPostToDelete.bind(this)
        this.deletePost = this.deletePost.bind(this)
    }

    componentDidMount() {
        this.loadPosts()
    }

    onCloseModalSelectedPost() {
        this.setState({
            selectedPost: {}
        })
    }

    onCloseModalSelectedPostToDelete() {
        this.setState({
            selectedPostToDelete: {}
        })
    }

    onClickEditButton(id){
        this.setState({
            idToEdit: id, shouldRedirectEditPost:true
        })
    }

    onClickDeleteButton(selectedPostToDelete) {
        this.setState({
            selectedPostToDelete
        })
    }

    onClickReadMoreButton(id){
        this.setState({
            idToReadMore: id,
            shouldRedirectPost: true,
        })
    }
    
    deletePost(id) {
        const loggedUser = LoginService.getLoggedUser()
        loggedUser.name
        ApiService.deletePost(loggedUser.accessToken, id)
        .then(() => {
            this.loadPosts()
        }).finally(() => {
            this.onCloseModalSelectedPostToDelete()
        })
    }
    
    loadPosts() {
        const loggedUser = LoginService.getLoggedUser()
        ApiService.getPosts(loggedUser.accessToken, loggedUser.name).then((resp) => {
            this.setState({
                posts: resp.data.posts
            })
        })
    }

    markdownTitle(title){
        return<ReactMarkdown source={title} />
    }
    renderPosts() {
        if (this.state.shouldRedirectEditPost) {
            return <Redirect to={"/editPost/" + `${this.state.idToEdit}`} />
        }if(this.state.shouldRedirectPost) {
            return <Redirect to={"/post/" + `${this.state.idToReadMore}`} />
        }
        else if (this.state.posts.length) {
            const posts = this.state.posts.map((post) => {
                return <div key={post.id}>
                    <PostCard
                        image={post.image}
                        title={post.title}
                        text={post.text}
                        description={post.description}
                        id={post.id}
                        onClickReadMoreButton={() => this.onClickReadMoreButton(post.id)}
                        onClickEditButton={() => this.onClickEditButton(post.id)}
                        onClickDeleteButton={() => this.onClickDeleteButton(post)}
                        
                    />
                </div>
            })
            return <div className="Posts--content">
                {posts}
            </div>
        }
        else{
            return <div className="Posts--empty">
            <Jumbotron className="Posts--jumbotron" title="Você não tem nenhum post"/> 
        </div>
        }
    }
    render() {
        return <div className="Posts">
            <Modal show={this.state.selectedPostToDelete.text}
                text={`Deseja excluir o post ${this.state.selectedPostToDelete.title} ?`}
                title="Confirmação"
                onClose={this.onCloseModalSelectedPostToDelete}
                classButtonAction="danger"
                onClickButtonAction={() => this.deletePost(this.state.selectedPostToDelete.id)}
                textButtonAction="Excluir"
            />
            {this.renderPosts()}
        </div>
    }
}
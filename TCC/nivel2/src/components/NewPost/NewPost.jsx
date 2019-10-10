import React from 'react'
import Button from '../generic/Button/Button'
import LoginService from '../../Services/LoginService'
import Input from '../generic/Input/Input'
import PostService from '../../Services/PostService'
import { Redirect} from 'react-router-dom'
import TextArea from '../generic/TextArea/TextArea'
import Alert from '../generic/Alert/Alert'
import './NewPost.css'
export default class NewPost extends React.Component {
    constructor(){
        super()
        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onClickExitButton = this.onClickExitButton.bind(this)
        this.onClickLogoutButton = this.onClickLogoutButton.bind(this)
        this.state = {
            shouldRedirectLogin: false,
            shouldRedirectHome: false, 
            posts:[],
        }   
    }

    componentDidMount() {
        this.clearFormData()
    }

    handleChange(e) {
        const target = e.target
        const name = target.name
        const value = target.value
        this.setState({
            [name]: value,
        })
    }

    onSubmitForm(post) {
        let posts = this.state.posts
        posts.push(post)
        this.setState({
          posts
        })
      }

    getInitialState() {
        return {
            title: '',
            description: '',
            text: '',
            image:'',
            error:'',
        }
    }

    clearFormData() {
        this.setState(this.getInitialState())
    }

    goHome(){
        this.setState({
            shouldRedirectHome: true
        })
    }

    onSubmit() {
        this.clearFormData()
        const home = this.state
        PostService.createPost(home.title, home.description, home.text, home.image)
        .then((result) => {
            this.setState(this.getInitialState())
        })
    }

    onClickExitButton(){
        this.setState({
            shouldRedirectHome: true
        })

    }
    
    onClickLogoutButton(){
        LoginService.logout()
        .then((result) =>{
            this.setState({
                shouldRedirectLogin: true
            })
        })
    }
    renderError() {
        return this.state.error ? <Alert text={this.state.error} alertType="danger"  class="alert"/> : undefined
    }

    render() {
        if(this.state.shouldRedirectHome){
            return <Redirect to='/home'/>
        }
        return(
            <div className="formPost">
                <div className="container">        
                    <div className="col-6 newPost--content">
                    <div className="pageTitle">Novo Post</div>     
                        <div className="col-10 newPost--form">
                            {this.renderError()}
                            <Input
                                handleChange={this.handleChange}
                                name="title"
                                type="text"
                                placeholder="Digite o título do post"
                                label="Título"
                                value={this.state.title}
                            />
                            <Input
                                handleChange={this.handleChange}
                                name="description"
                                type="text"
                                placeholder="Digite a descrição do post"
                                label="Descrição"
                                value={this.state.description}
                            />
                            <TextArea
                                handleChange={this.handleChange}
                                name="text"
                                type="text"
                                placeholder="Digite o post"
                                label="Post"
                                value={this.state.text}
                            />
                            <Input
                                handleChange={this.handleChange}
                                name="image"
                                type="text"
                                placeholder="Digite a URL da imagem"
                                label="Imagem(URL)"
                                value={this.state.image}
                            />
                            <div className="newPost--buttons">
                                <Button type="submit"
                                text="Enviar"
                                classButton="primary"
                                onClick={this.onSubmit}/>
                                <Button type="button"
                                text="Cancelar"
                                classButton="secondary"
                                class="exitNewPost--button"
                                onClick={this.onClickExitButton}/>
                            </div>
                    </div>
                </div>
            </div>
        </div>)
    }
}

import React from 'react'
import Button from '../generic/Button/Button'
import Select from '../generic/Select/Select'
import Input from '../generic/Input/Input'
import MovieService from '../../Services/MovieService'
import ApiService from '../../Services/ApiService'
import $ from 'jquery'

export default class Modal extends React.Component{
    constructor() {
        super()
        this.handdleChange = this.handdleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.state ={
            posts: []
        }
    }

    componentDidMount() {
        this.clearFormData()
    }

    handdleChange(e) {
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
        //   posts
        })
      }

    getCategoriesOptions() { 
        ApiService.getCategories()
        .then((result =>{
            let category = result.data
            this.setState({
                category
            })
        }))
    }

    getInitialState() {
        return {
            category: [],
            title: '',
            text: '',
            image:'',
        }
    }

    clearFormData() {
        this.setState(this.getInitialState())
    }

    onSubmit(e) {
        e.preventDefault()
        this.clearFormData()
        const home = this.state
        MovieService
        .createMovieNew(home.title, home.text, home.category, home.image)
        .then((result) => {
            this.setState(this.getInitialState())
        }).catch((err) => {
            this.setState({
                error: err.response.data.error
            })
        })
    }

    render(){
        return (
            <div>
        <div className="modal-header">
            <button id ="botao" className="btn btn-primary btn-create-thought" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">
                <span>Novo Filme</span>
            </button>        
        </div>
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Novo filme</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form onSubmit={this.onSubmit}>
                <Input
                    handdleChange={this.handdleChange}
                    name="title"
                    type="text"
                    placeholder="Titulo"
                    label="Titulo"
                    value={this.state.title}
                />
                <Input
                    handdleChange={this.handdleChange}
                    name="text"
                    type="text"
                    placeholder="Descrição"
                    label="Descrição"
                    value={this.state.text}
                />
                <Input
                    handdleChange={this.handdleChange}
                    name="image"
                    type="text"
                    placeholder="URL da imagem"
                    label="URL da imagem"
                    value={this.state.image}
                />
                <Select label="Categoria"
                    name="category"
                    value={this.state.category}
                    options={this.getCategoriesOptions()}
                    handdleChange={this.handdleChange} />

                <Button
                    classButton="primary" 
                    type="submit" 
                    text="Enviar Filme"
                     />
                    </form>
                </div>
            </div>
        </div>
        </div>
        </div>)
    }
}